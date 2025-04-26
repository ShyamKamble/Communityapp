import express from 'express';
import mongoose from 'mongoose';
import { auth } from 'express-openid-connect';
import User from './models/User.js'; // Ensure correct path with .js extension
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Basic route for /
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Auth0 configuration
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
};

app.use(auth(config));

// Connect to MongoDB (use MongoDB Atlas URI from .env)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Route after login
app.get('/profile', async (req, res) => {
  const user = req.oidc.user;  // This is the user object returned by Auth0

  if (!user) return res.status(401).send('Not logged in');

  // Check if user exists in DB
  let existingUser = await User.findOne({ email: user.email });

  if (!existingUser) {
    // If user doesn't exist, create and save a new user to MongoDB
    const newUser = new User({
      name: user.name,        // Auth0 returns the name field
      email: user.email,      // Auth0 returns the email field
      picture: user.picture   // Auth0 returns the picture (URL) field
    });

    // Save the new user to the database
    await newUser.save();
    console.log('User saved to DB');
  }

  // Send a response back to the client
  res.send(`Welcome, ${user.name}`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
