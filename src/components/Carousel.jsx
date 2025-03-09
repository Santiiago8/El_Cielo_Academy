import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/Carousel.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import image1 from '../assets/img/instalations.avif'
import image2 from '../assets/img/classmates.avif'
import image3 from '../assets/img/kid.avif'
import image4 from '../assets/img/kidAndTeacher.avif'
import image5 from '../assets/img/kidAndTeacher2.avif'

const images = [image1, image2, image3, image4, image5]

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div className={`${className} slick-next`} style={style} onClick={onClick}>
      <ChevronRight className="text-white" size={24} />
    </div>
  )
}

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div className={`${className} slick-prev`} style={style} onClick={onClick}>
      <ChevronLeft className="text-white" size={24} />
    </div>
  )
}

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Gallery</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index}`} className="carousel-image" />
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <h3 className="slide-title">Image Title {index + 1}</h3>
                <p className="slide-description">A brief description of the image goes here.</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
