// const nodemailer = require('nodemailer');
// require('dotenv').config();

// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });

// let mailOptions = {
//   from: 'dadtothemax87@gmail.com',
//   to: '87jmulligan@gmail.com',
//   subject: 'Contact from the website',
//   text: 'It works'
// };

// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log('Error occurred');
//   } else {
//     console.log('Email sent!');
//   }
// });
const express = require('express');

const app = express();
app.use(express.json({ extended: false }));

const { sendEmail } = require('./mail/mail');

app.post('/api/form', (req, res) => {
  console.log(req.body);
  sendEmail(req.body.email, req.body.name);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
