import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Button.css';

export const Button = ({ text, to }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }
  return (
    <button className="cta-button" onClick={handleClick}>
      {text}
    </button>
  );
};
