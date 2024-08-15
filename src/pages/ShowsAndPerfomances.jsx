import React from 'react';
import { HeroSection } from '../components/HeroSection';
import heroImage from '../assets/img/portada.avif';
import '../styles/ShowsAndPerfomances.css';
import { Button } from '../components/Button';
import silksImage from '../assets/img/sky-and-clouds.avif';
import hoopImage from '../assets/img/sky-and-clouds.avif';
import strapsImage from '../assets/img/sky-and-clouds.avif';
import harnessImage from '../assets/img/sky-and-clouds.avif';
import ShowsCards from '../components/ShowsCards';

const shows = [
  {
    title: 'Aerial Silks Shows',
    description: 'Beautiful and graceful performances high in the air on fabric.',
    img: silksImage,
  },
  {
    title: 'Aerial Hoop Shows',
    description: 'Dynamic and captivating performances on a circular steel apparatus.',
    img: hoopImage,
  },
  {
    title: 'Straps Shows',
    description: 'Strong and elegant performances on aerial straps.',
    img: strapsImage,
  },
  {
    title: 'Dance in Harness Shows',
    description: 'Innovative and exciting performances combining dance and aerial harness techniques.',
    img: harnessImage,
  },
];

export const ShowsAndPerfomances = () => {
  return (
    <>
      <div data-aos="zoom-in">
        <HeroSection
          backgroundImage={heroImage}
          title={"El Cielo Academy"}
          subTitle={'Know about our Performances'}
        />
      </div>
      <div className="performances-container">
        <h2>Shows & Performances</h2>
        <p className="description">
          Add a touch of magic to your event, wedding, or special occasion with our incredible performances. We provide:
        </p>
        <div className="shows-list">
          {shows.map((show, index) => (
            <ShowsCards
              key={index}
              title={show.title}
              description={show.description}
              img={show.img}
              order={index}
            />
          ))}
        </div>

        <div data-aos="fade-up">
          <p className="description">Available as solo acts, duos, or groups.</p>
          <div className="highlight">
            <p>🌟 New! Be Part of the Show! 🌟</p>
            <p>Ever dreamed of stepping into the spotlight? We offer exclusive opportunities for you to join the performance! Whether it’s as a guest star, learning a routine, or performing in a unique role, we can help make your dreams come true!</p>
          </div>
          <p className="description">Contact us for our list of artists and to start planning a performance that will wow your guests!</p>
          <div className="button-container">
            <Button text="View Our Performances" to="/" />
            <Button text="Contact Us" to="/contact" />
          </div>
        </div>

      </div>
    </>
  );
};
