// Import required modules
const express = require('express'); // Express for handling HTTP requests
const bcrypt = require('bcryptjs'); // bcrypt for hashing passwords
const jwt = require('jsonwebtoken'); // JSON Web Token for generating tokens
const User = require('../models/User'); // User model for interacting with the database
const router = express.Router(); // Router to define routes

// Route for user signup (registration)
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate inputs
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Route for user login
router.post('/login', async (req, res) => {
  try {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Invalid credentials');

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    // Generate a JSON Web Token (JWT) with the user's ID
    const token = jwt.sign({ id: user._id }, 'secretkey');

    // Respond with the generated token
    res.json({ token });
  } catch (err) {
    // Respond with an error message in case of an issue
    res.status(500).json({ error: err.message });
  }
});

// Export the router so it can be used in other parts of the application
module.exports = router;
