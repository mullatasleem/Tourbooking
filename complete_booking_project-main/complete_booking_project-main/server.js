const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/bookingRoutes'); // Import the booking routes
const Destination = require('./models/Destination'); // Import the Destination model

const app = express();
const port = 3000;

// Set up EJS view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));  // To serve static files like images

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/travel-bookings', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB Connected');
    
    // Update the image URLs for New York and London after connecting
    updateImageURLs();
  })
  .catch(err => console.log('MongoDB Connection Error:', err));

// Function to update image URLs for destinations
const updateImageURLs = async () => {
  try {
    // Update the image URL for "New York"  
    await Destination.updateOne(
      { name: "New York" },
      { $set: { image: "https://tse1.mm.bing.net/th?id=OIP.oPY7YsfmvUFubtYkdoNOHgHaEK&pid=Api&P=0&h=220" } }
    );
    console.log("Image URL updated successfully for New York");

    // Update the image URL for "London"
    await Destination.updateOne(
      { name: "London" },
      { $set: { image: "https://tse2.mm.bing.net/th?id=OIP.Z7gDHZBRArlfFgKKQOmyigHaDt&pid=Api&P=0&h=220" } }
    );
    console.log("Image URL updated successfully for London");

  } catch (err) {
    console.log("Error updating image URLs:", err);
  }
};

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Use booking routes for /booking
app.use(bookingRoutes); // Use the booking routes here

// Route to render home page with destinations
app.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find(); // Fetch all destinations from the DB
    res.render('home', { destinations }); // Render the home.ejs page with the destinations data
  } catch (err) {
    console.error('Error fetching destinations:', err);
    res.status(500).send('Error loading destinations');
  }
});

// Route to render the booking form for a specific destination
app.get('/booking/:destinationName', async (req, res) => {
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
