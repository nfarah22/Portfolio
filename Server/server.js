require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
 
  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

