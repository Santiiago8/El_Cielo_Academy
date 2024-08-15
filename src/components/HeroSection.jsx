import React from 'react'
import '../styles/HeroSection.css'

export const HeroSection = ( { backgroundImage, title, subTitle, showOverlay=true } ) => {
  return (
    <div className='hero-section'>
        <img src={backgroundImage} alt="Hero Background" className="hero-image" />
        {showOverlay && (
            <div className="overlay"></div>
        )}
        <div className='hero-content'>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    </div>
  )
}
