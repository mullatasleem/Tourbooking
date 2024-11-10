const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');

// Route to render home page with destination cards
router.get('/', async (req, res) => {
  try {
    let destinations = await Destination.find();
    
    // If no destinations, send dummy data
    if (destinations.length === 0) {
      destinations = [
        {
          name: 'Random Destination',
          description: 'A beautiful place to visit.',
          image: 'default-image.jpg'  // Placeholder image
        }
      ];
    }

    res.render('home', { destinations });
  } catch (err) {
    console.error('Error fetching destinations:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
