import React from 'react'
import { HeroSection } from '../components/HeroSection'
import heroImage from '../assets/img/portada.avif'
import { Testimonials } from '../components/Testimonials'
import { Carousel } from '../components/Carousel'
import { CTA } from '../components/CTA'

export const Home = () => {
  
  const title = 'El Cielo Academy'
  const subTitle = 'Where Discipline Meets Creation, Art Takes Flight'
  
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
        <Testimonials />
      </div>
      <div data-aos="fade-up">
        <Carousel />
      </div>
      <div data-aos="fade-up">
        <CTA />
      </div>
    </div>
  )
}