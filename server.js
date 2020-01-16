const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json({ extended: false }));

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
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: process.env.EMAIL, // sender address
    to: '87jmulligan@gmail.com', // list of receivers
    subject: 'Contact from website', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
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
