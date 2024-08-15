import React from 'react';
import { HeroSection } from '../components/HeroSection';
import '../styles/Services.css';
import regularClassesImage from '../assets/img/regular-clases-card-img.avif';
import workshopsImage from '../assets/img/WorkShops-img.avif';
import showsImage from '../assets/img/coach-Brenda.avif';
import { Button } from '../components/Button';

export const Services = () => {
  return (
    <>
      <div data-aos="zoom-in">
        <HeroSection
          backgroundImage={regularClassesImage}
          title="El Cielo Academy"
          subTitle="Discover The Variety Of Services We Offer"
        />
      </div>

      <div className="services-container">
        <div data-aos="fade-down">
          <h2>Our Services</h2>
        </div>

        <div className="cards-container">
          <div data-aos="fade-right">
            <div className="card">
              <img src={regularClassesImage} alt="Regular Classes" />
              <h3>Regular Classes</h3>
              <Button text="More Info" to='/regular-shows' />
            </div>
          </div>

          <div data-aos="fade-up">
            <div className="card">
              <img src={workshopsImage} alt="Workshops" />
              <h3>Workshops</h3>
              <Button text="More Info" to='/workshops' />
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="card">
              <img src={showsImage} alt="Shows & Performances" />
              <h3>Shows & Performances</h3>
              <Button text="More Info" to='/shows-and-perfomances' />
            </div>
          </div>
        </div>
        <div className='btn-container'>
          <Button text='Book Now!' to='/contact' />
        </div>
      </div>
    </>
  );
};
