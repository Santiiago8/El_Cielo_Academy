import React from 'react';
import image from '../assets/img/coach-Brenda.avif';
import aerialClassImg from '../assets/img/Aerial-class.avif';
import circusFactoryImg from '../assets/img/CircusFactory-img.avif';
import aerialHoops from '../assets/img/aerialHoops.avif';
import { HeroSection } from '../components/HeroSection';
import '../styles/RegularClasses.css';
import { Button } from '../components/Button';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const classesData = [
  {
    title: 'Aerial Class',
    Description: 'Develop strength, flexibility, endurance, and coordination through our signature aerial classes. Our unique classes feature a full warm-up and skill-building exercises on the floor, designed to prepare you for aerial success. Our curriculum blends foundational gymnastics with advanced aerial arts techniques.',
    Suitable: 'All levels, ages 14 and up, with no weight restrictions.',
    Duration: '90 minutes',
    img: aerialClassImg,
  },
  {
    title: 'Aerial Hoop & Straps',
    Description: 'Our Aerial Hoop & Straps class offers a structured curriculum that alternates weekly between hoop and straps. In Week A, you will focus exclusively on the hoop, and in Week B, you will concentrate on the straps. This approach helps you build a strong foundation in each apparatus and progressively improve your skills.',
    Suitable: 'All levels, ages 14 and up, with no weight restrictions.',
    Duration: '90 minutes',
    img: aerialHoops,
  },
  {
    title: 'Bungee Dance Fitness',
    Description: 'Bungee Dance Fitness is an aerial sport that combines dance, gymnastics, and HIIT. This dynamic workout boosts metabolism, burns calories, and aids in weight loss while improving fitness levels, strength, and coordination.',
    Suitable: 'All levels, adults of all genders, with a maximum weight limit of 90 kg for safety.',
    Duration: '60 minutes',
    img: image,
  },
  {
    title: 'Full Body Program',
    Description: 'The Full Body Program is designed for adults who are ready to make lasting changes to their habits and lifestyle. Each class builds on previous sessions, focusing on fitness goals through basic gymnastics, floor workouts, and aerial arts techniques.',
    Suitable: 'Adults of all genders, with no weight restrictions.',
    Duration: '90 minutes',
    img: image,
  },
  {
    title: 'Circus Factory',
    Description: 'This is our signature class designed for children aged 4 to 13. Led by professional coaches, this class introduces kids to the exciting world of circus arts in a safe and supportive environment.',
    Suitable: 'Children aged 4 to 13.',
    Duration: '60 minutes',
    img: circusFactoryImg,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Ajustar según el tamaño deseado
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
export const RegularClasses = () => {
  return (
    <>
      <div data-aos="zoom-in">
        <HeroSection
          backgroundImage={image}
          title="El Cielo Academy"
          subTitle="Discover The Variety Of Services We Offer"
        />
      </div>
      <div className='clasess-container'>
        <h2>Regular Classes</h2>
        <Slider {...settings}>
          {classesData.map((card, index) => (
            <div key={index} className="card-slide">
              <div className="card-container">
                <div className="img-container">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-data">
                  <h3>{card.title}</h3>
                  <p>{card.Description}</p>
                  <p><b>Suitable For: </b>{card.Suitable}</p>
                  <p><b>Duration: </b>{card.Duration}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='btn-container'>
        <Button text='Book Now!' to='/contact' />
      </div>
    </>
  );
};