const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load .env variables

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON body requests

app.post('/register', async (req, res) => {
  const { name, email, mobile, password } = req.body;

  console.log('User Registration Data:', { name, email, mobile, password });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to VHX View',
    html: `<p>Hello ${name},</p>
           <p>Thank you for registering with VHX View. We are excited to have you on board!</p>
           <p>Best regards,</p>
           <p>VHX View Team</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.json({ success: true, message: 'Registration successful. Welcome email sent.' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send welcome email.' });
  }
});


app.listen(3034, () => console.log('Server running on '));
