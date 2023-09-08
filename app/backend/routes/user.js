const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Create route
router.route('/create').post(async (req, res) => {
    try {
        user_details = {
            'username': req.body.username,
            'password': req.body.password,
        }

        const newUser = new User(user_details);
        newUser.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    }
    catch {
        res.status(500).send();
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        const isPasswordValid = await User.findOne(req.body.password, user.password);
        if (isPasswordValid) {
          // Store user details in the session
          req.session.user = {
            id: user._id,
            username: user.username,
            // Add other relevant user details to store in the session if needed.
          };
          res.status(200).json({ message: 'Login successful' });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// Logout route
router.post('/logout', (req, res) => {
    // Destroy the session to log out the user
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        res.status(500).json({ message: 'Server error' });
      } else {
        res.json({ message: 'Logged out successfully' });
      }
    });
  });

    module.exports = router;