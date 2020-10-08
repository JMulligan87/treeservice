const express = require('express');

const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
require('dotenv').config();

const app = express();
app.use(express.json({ extended: false }));

const myOAuth2Client = new OAuth2(
  process.env.CLIENTID,
  process.env.CLIENTSECRET,
  'https://developers.google.com/oauthplayground'
);

myOAuth2Client.setCredentials({
  refresh_token: process.env.REFRESHTOKEN,
});

const myAccessToken = myOAuth2Client.getAccessToken();

app.post('/api/form', (req, res) => {
  console.log(req.body);

  const output = ` 
              <br />
              <br />
              <div>Name: ${req.body.name} </div>
              <br />
              <div>Phone: ${req.body.phone} </div>
              <br />
              <div>Address: ${req.body.address} </div>
              <br />
              <div>Message: ${req.body.message} </div>
              <br />
              <br />
  `;
  // create reusable transporter object using the default SMTP transport
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL, //your gmail account you used to set the project up in google cloud console"
      clientId: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      refreshToken: process.env.REFRESHTOKEN,
      accessToken: myAccessToken, //access token variable we defined earlier
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: process.env.EMAIL, // sender address
    to: process.env.EMAIL2, // list of receivers
    subject: 'Contact from website', // Subject line
    text: 'Hello world?', // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', { msg: 'Email has been sent' });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
