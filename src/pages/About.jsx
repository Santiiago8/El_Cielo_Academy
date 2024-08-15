import React from 'react'
import { HeroSection } from '../components/HeroSection'
import heroImage from '../assets/img/cover-about-us.avif'
import { AboutContent } from '../components/AboutContent'
import { Staff } from '../components/Staff'

export const About = () => {

  const title = 'El Cielo Academy'
  const subTitle = 'The Sky Awaits Beyond Your Fears'

  return (
    <div>
      <div data-aos="zoom-in">
        <HeroSection 
          backgroundImage={heroImage} 
          title={title} 
          subTitle={subTitle}
        />
      </div>
      <div data-aos="fade-up">
        <AboutContent />
      </div>
      <div data-aos="fade-up">
        <Staff />
      </div>
    </div>
  )
}