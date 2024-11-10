const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');

// Define the booking route
router.get('/booking/:destinationName', async (req, res) => {
    const { destinationName } = req.params;  // Capture the dynamic destination name from the URL
    console.log(`Booking page requested for: ${destinationName}`);  // Debugging log

    try {
        const destination = await Destination.findOne({
            name: { $regex: new RegExp(`^${destinationName.replace(/\s+/g, '').toLowerCase()}$`, 'i') }
        });

        if (!destination) {
            return res.status(404).send('Destination not found');
        }

        res.render('booking', { destination });  // Render the booking page with the destination data
    } catch (err) {
        console.error('Error fetching destination:', err);
        res.status(500).send('Error loading destination');
    }
});

// Export the router
module.exports = router;
