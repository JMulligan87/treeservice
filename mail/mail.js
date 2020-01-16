// const nodemailer = require('nodemailer');
// require('dotenv').config();
// const { Template } = require('./emailTemplate');

// const getEmailData = (req, template) => {
//   let data = null;

//   switch (template) {
//     case 'Template':
//       data = {
//         from: process.env.EMAIL,
//         to: '87jmulligan@gmail.com',
//         subject: 'Contact from the website',
//         text: req.body,
//         html: Template()
//       };
//       break;
//     default:
//       data;
//   }
// };

// const sendEmail = (name, phone, address, message, type) => {
//   let transporter = nodemailer.createTransport({
//     service: 'yahoo',
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD
//     }
//   });
//   const mail = getEmailData(name, phone, address, message, type);

//   transporter.sendMail(mail, function(err, data) {
//     if (err) {
//       console.log('Error occurred');
//     } else {
//       console.log('Email sent!');
//     }
//     transporter.close();
//   });
// };

// module.exports = { sendEmail };
