import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
  });
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Sign In and Sign Up

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      alert('Account Created Successfully');
    } else {
      alert('Sign In Successful');
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Toggle between Sign In and Sign Up forms
  };

  return (
    <div className="signin">
      <div className="signin-container">
        <h2>{isSignUp ? 'Create an Account' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={userDetails.name || ''}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userDetails.email || ''}
                onChange={handleChange}
              />
            </>
          )}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userDetails.username || ''}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails.password || ''}
            onChange={handleChange}
          />
          {isSignUp && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={userDetails.confirmPassword || ''}
              onChange={handleChange}
            />
          )}
          <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
        <p onClick={toggleForm} className="toggle-link">
          {isSignUp ? 'Already have an account? Sign In' : 'Create an Account'}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
