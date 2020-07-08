const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res, next) => {
  const {name, email, subject, message} = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'francisco.chiarino.website@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  });
  const mailOptions = {
    from: email,
    to: 'francisco.chiarino@gmail.com',
    subject: subject,
    text: `Name: ${name}\nFrom: ${email}\n \n${message}`
  };
  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) { next(err) }
    else { res.json({success: true, info}) }
  });
}