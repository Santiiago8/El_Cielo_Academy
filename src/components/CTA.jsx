import React from 'react';
import '../styles/CTA.css';
import { Button } from './Button';

export const CTA = () => {
  return (
    <div className="cta-container">
      <h2>No Limits. Just Possibilities.</h2>
      <h3>Ready To Get Started?</h3>
      <p>Contact us today to learn more about our programs and how we can help you achieve your goals.</p>
      <Button text="Contact Us" to='/contact'/>
    </div>
  );
};
