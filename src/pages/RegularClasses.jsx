import React from 'react'
import image from '../assets/img/coach-Brenda.avif'
import aerialClassImg from '../assets/img/Aerial-class.avif'
import circusFactoryImg from '../assets/img/CircusFactory-img.avif'
import { HeroSection } from '../components/HeroSection'
import '../styles/RegularClasses.css'
import { Button } from '../components/Button'

const classesData = [
  {
    title: 'Aerial Class',
    Description: 'Develop strength, flexibility, endurance, and coordination through our signature aerial classes. Our unique classes feature a full warm-up and skill-building exercises on the floor, designed to prepare you for aerial success. Our curriculum blends foundational gymnastics with advanced aerial arts techniques',
    Suitable: 'All levels, ages 14 and up, with no weight restrictions.',
    Duration: '90 minutes',
    img: aerialClassImg,
  },
  {
    title: 'Aerial Hoop & Straps',
    Description: 'Our Aerial Hoop & Straps class offers a structured curriculum that alternates weekly between hoop and straps. In Week A, you wll focus exclusively on the hoop, and in Week B, you will concentrate on the straps. This approach helps you build a strong foundation in each apparatus and progressively improve your skills.',
    Suitable: 'All levels, ages 14 and up, with no weight restrictions.',
    Duration: '90 minutes',
    img: image,
  },
  {
    title: 'Bungee Dance Fitness',
    Description: 'Bungee Dance Fitness is an aerial sport that combines dance, gymnastics, and HIIT. This dynamic workout boosts metabolism, burns calories, and aids in weight loss while improving fitness levels, strength, and coordination. Its low-impact nature makes it ideal for injury prevention and offers benefits such as increased flexibility and balance.',
    Suitable: ' All levels, Adults of all genders, with a maximum weight limit of 90 kg for safety.',
    Duration: '60 minutes',
    img: image,
  },
  {
    title: 'Full Body Program',
    Description: 'The Full Body Program is designed for adults who are ready to make lasting changes to their habits and lifestyle. Each class builds on previous sessions, focusing on fitness goals through basic gymnastics, floor workouts, and aerial arts techniques to enhance flexibility, strength, coordination, and balance.',
    Suitable: 'Adults of all genders, with no weight restrictions.',
    Duration: '90 minutes',
    img: image,
  },
  {
    title: 'Circus Factory',
    Description: 'is our signature class designed for children aged 4 to 13. Led by our professional coaches, this class introduces kids to the exciting world of circus arts in a safe and supportive environment. Each week, children focus on one apparatus at a time, learning basic gymnastics and aerial arts techniques while developing discipline, coordination, and confidence.',
    Suitable: 'Children aged 4 to 13.',
    Duration: '60 minutes',
    img: circusFactoryImg,
  },
]
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
        <div className="cards-container">
          {classesData.map((card, index) => (
            <div data-aos="fade-up" key={index}>
              <div className="card-container" >
                <div className="img-container">
                  <img src={card.img} />
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
        </div>
      </div>
      <div className='btn-container'>
        <Button text='Book Now!' to='/contact' />
      </div>

    </>
  )
}
