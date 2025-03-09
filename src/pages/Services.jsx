import React from 'react';
import { HeroSection } from '../components/HeroSection';
import '../styles/Services.css';
import regularClassesImage from '../assets/img/regular-clases-card-img.avif';
import workshopsImage from '../assets/img/WorkShops-img.avif';
import showsImage from '../assets/img/coach-Brenda.avif';
import heroImage from '../assets/img/Services-img.avif';
import { Button } from '../components/Button';

export const Services = () => {
  return (
    <>
      <div data-aos="zoom-in">
        <HeroSection
          backgroundImage={heroImage}
          title="El Cielo Academy"
          subTitle="Discover The Variety Of Services We Offer"
        />
      </div>

      <div className="services-container">
        <div data-aos="fade-down" className="intro-text">
          <h2>Unlock Your Potential with El Cielo Academy</h2>
          <p>Ready to take your skills to the next level? Whether you're a seasoned performer or just starting your journey in circus arts, our specialized programs are designed to help you reach new heights. From our exhilarating Aerial Classes to our dynamic Bungee Dance Fitness sessions, there's something for everyone at El Cielo Academy. Don't wait—book your spot today and join a community where creativity meets discipline. Your next adventure in circus arts is just a click away!</p>
        </div>

        <div data-aos="fade-down">
          <h2>Our Services</h2>
        </div>

        <div className="cards-container">
          <div data-aos="fade-right" className="card">
            <div className="card-image">
              <img src={regularClassesImage} alt="Regular Classes" />
            </div>
            <div className="card-content">
              <h3>Regular Classes</h3>
              <Button text="More Info" to='/regular-classes' />
            </div>
          </div>

          <div data-aos="fade-up" className="card">
            <div className="card-image">
              <img src={workshopsImage} alt="Workshops" />
            </div>
            <div className="card-content">
              <h3>Workshops</h3>
              <Button text="More Info" to='/workshops' />
            </div>
          </div>

          <div data-aos="fade-left" className="card">
            <div className="card-image">
              <img src={showsImage} alt="Shows & Performances" />
            </div>
            <div className="card-content">
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
