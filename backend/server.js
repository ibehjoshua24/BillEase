const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect(process.env.dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

// Define User Schema
const userSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    phoneNumber: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(cors());

// Forgot Password endpoint
app.post('/forgot-password', async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const resetToken = crypto.randomBytes(20).toString('hex');
      user.resetToken = resetToken;
      user.resetTokenExpiration = Date.now() + 3600000; // Token expires in 1 hour
  
      await user.save();
  
      const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
  
      const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Password Reset',
        html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Email Error:', error);
          res.status(500).json({ error: 'Failed to send reset email' });
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({ message: 'Reset email sent successfully' });
        }
      });
    } catch (error) {
      console.error('Forgot Password Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
// Signup endpoint
app.post('/signup', async (req, res) => {
    try {
      const { fullname, username, email, phoneNumber, password } = req.body;
  
      // Check if the username or email already exists
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }
  
      // Hash the password securely
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = new User({
        fullname,
        username,
        email,
        phoneNumber,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await user.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Sign Up Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


// Login endpoint
app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });