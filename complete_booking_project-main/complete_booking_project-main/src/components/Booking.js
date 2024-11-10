import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    place: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Successful!');
  };

  return (
    <div className="booking">
      <h2>Book Your Tour</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="place"
          placeholder="Place to visit"
          value={formData.place}
          onChange={handleChange}
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
