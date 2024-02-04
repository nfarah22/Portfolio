require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2543448d1b4a02",
    pass: "5b53c480247e27"
  }
});


app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
 
  const mailOptions = {
    from: email, 
    to: process.env.RECIPIENT_EMAIL, 
    subject: `New message from ${name}`, 
    text: message, 
  };
  
  transport.sendMail(mailOptions, (error, info) => {
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
