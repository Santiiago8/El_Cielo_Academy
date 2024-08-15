import React from 'react'
import { HeroSection } from '../components/HeroSection'
import image from '../assets/img/coach-Brenda.avif'
import '../styles/Workshops.css'

export const WorkShops = () => {
  return (
    <>
      <div data-aos="zoom-in">
        <HeroSection
          backgroundImage={image}
          title="El Cielo Academy"
          subTitle="WorkShops Up Comming"
        />
      </div>
      <div className="workshops-container">
        <h2>WorkShops</h2>
        <div className='adviced-container'>
          <p>
            Exciting Workshops Coming Soon! Check Back Here for Updates.
          </p>
        </div>
      </div>
    </>
  )
}
