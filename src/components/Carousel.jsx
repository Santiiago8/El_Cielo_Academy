import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css'
import image1 from '../assets/img/in-the-beach.avif';
import image2 from '../assets/img/in-the-sky.avif';
import image3 from '../assets/img/in-the-sky2.avif';
import image4 from '../assets/img/sky-and-clouds.avif';
import image5 from '../assets/img/portada.avif';

const images = [image1, image2, image3, image4, image5];

export const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }
    return (
        <div className="carousel-container">
            <h2>Gallery</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
