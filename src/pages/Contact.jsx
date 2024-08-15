import React from 'react'
import { HeroSection } from '../components/HeroSection'
import heroImage from '../assets/img/portada.avif'
import { ContactForm } from '../components/ContactForm'
import '../styles/Contact.css'
export const Contact = () => {
  return (
    <>
      <div data-aos="zoom-in">
        <HeroSection 
          backgroundImage={heroImage} 
          title={'El Cielo Academy'} 
          subTitle={'Contact With Us'}
        />
      </div>
      <div className="contact-page-container">
        <ContactForm />
      </div>
    </>
  )
}
