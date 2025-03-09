import React from 'react';
import '../styles/Staff.css';
import staffImg1 from '../assets/img/user.png';
import staffImg2 from '../assets/img/user.png';
import staffImg3 from '../assets/img/user.png';
import staffModalImg1 from '../assets/img/Katherina3.avif'
import staffModalImg2 from '../assets/img/Brenda4.avif'
import staffModalImg3 from '../assets/img/FarahShady.avif'

const staffMembers = [
  {
    name: 'Katherina Vega',
    position: 'Director of El cielo academy  Coach',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur.',
    image: staffImg1,
    image2: staffModalImg1,
  },
  {
    name: 'Brenda Vega',
    position: 'Head Coach',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur.',
    image: staffImg2,
    image2: staffModalImg2,
  },
  {
    name: 'Farah Shady',
    position: 'Coach',
    moreInfo: 'Lorem ipsum dolor sit amet, consectetur.',
    image: staffImg3,
    image2: staffModalImg3,
  },
];

export const Staff = ({ onCardClick }) => {
  return (
    <div className="staff-container">
      <h2 className="staff-title">Our Team</h2>
      <div className="staff-grid">
        {staffMembers.map((member, index) => (
          <div
            className="staff-card"
            key={index}
            onClick={() => onCardClick(member)}
          >
            <div className="staff-image-container">
              <img src={member.image} alt={member.name} className="staff-image" />
            </div>
            <h3 className="staff-name">{member.name}</h3>
            <p className="staff-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
