import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Places from './components/Places';
import Booking from './components/Booking';
import Login from './components/Login';
import SignIn from './components/Signin';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => setIsAuthenticated(true);
  const logoutHandler = () => setIsAuthenticated(false);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={logoutHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login onLogin={loginHandler} />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
