import React, { useState } from 'react';
import Header from './Header';  // Ensure this is the correct path to your Header component
import Footer from './Footer';  // Ensure this is the correct path to your Footer component
import './Home.css'; // Ensure Home.css exists and is being applied

const places = [
  {
    name: 'Paris',
    image: 'https://tse1.mm.bing.net/th?id=OIP.Dp4FXJ5Jm7TxUjaTQsudVwHaEo&pid=Api&P=0&h=220', 
    description: 'The city of lights.',
  },
  {
    name: 'New York',
    image: 'https://tse3.mm.bing.net/th?id=OIP.0mOuTg21PKAZGrZ45dat0QHaE7&pid=Api&P=0&h=220',
    description: 'The city that never sleeps.',
  },
  {
    name: 'Tokyo',
    image: 'https://tse1.mm.bing.net/th?id=OIP.NcwLTamLjKfR4e0idisoJgHaEo&pid=Api&P=0&h=220',
    description: 'A blend of tradition and modernity.',
  },
];

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // You can toggle this for login/logout state

  const handleLogout = () => {
    // Clear user data (simulating log out)
    // For example, clearing local storage (or any other state management system you're using)
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    alert('Logged out successfully');
  };

  return (
    <div className="home">
      <Header onLogout={handleLogout} /> {/* Pass logout function to Header */}
      
      <div className="home-content">
        <h2>Welcome to Travel Tours</h2>
        <div className="cards-container">
          {places.map((place, index) => (
            <div className="card" key={index}>
              <img src={place.image} alt={place.name} />
              <div className="card-info">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default Home;
