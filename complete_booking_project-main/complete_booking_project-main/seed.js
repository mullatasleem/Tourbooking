const mongoose = require('mongoose');
const Destination = require('./models/Destination'); // Your Destination model

mongoose.connect('mongodb://localhost:27017/travel-bookings', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    
    // New destinations to add
    const destinations = [
        {
            name: 'Paris',
            description: 'City of Lights',
            image: 'https://tse2.mm.bing.net/th?id=OIP.YGAo4ULc84h7VNrV60dRVgHaEK&pid=Api&P=0&h=220'
        },
        {
            name: 'London',
            description: 'The British Capital',
            image: 'https://tse2.mm.bing.net/th?id=OIP.E8nqVjQ0U5FlfZdrWbgItAHaEK&pid=Api&P=0&h=220'
        },
        {
            name: 'New York',
            description: 'The Big Apple',
            image: 'https://tse2.mm.bing.net/th?id=OIP.YT7CICpc03nuyv95Zqr7FwHaEK&pid=Api&P=0&h=220'
        }
    ];

    // Insert destinations into the database
    Destination.insertMany(destinations)
        .then(() => {
            console.log('Destinations added!');
            mongoose.connection.close(); // Close connection after saving
        })
        .catch(err => console.error(err));
}).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
});
