import React from 'react';
import '../styles/ShowsCards.css'; // Asegúrate de tener este archivo para los estilos

const ShowsCards = ({ title, description, img, order }) => {
  const isImageFirst = order % 2 === 0;

  return (
    <div className="show-card">
      {isImageFirst ? (
        <>
          <img src={img} alt={title} className="show-card-img" data-aos="fade-right" />
          <div className="show-card-info" data-aos="fade-right">
            <h3 className="show-card-title">{title}</h3>
            <p className="show-card-description">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="show-card-info" data-aos="fade-left">
            <h3 className="show-card-title">{title}</h3>
            <p className="show-card-description">{description}</p>
          </div>
          <img src={img} alt={title} className="show-card-img" data-aos="fade-left"/>
        </>
      )}
    </div>
  );
};

export default ShowsCards;
