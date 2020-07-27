const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res, next) => {
  const {name, email, subject, message} = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_SENDER_PASSWORD
    }
  });
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: subject,
    text: `Name: ${name}\nFrom: ${email}\n \n${message}`
  };
  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) { next(err) }
    else { res.json({success: true, info}) }
  });
}