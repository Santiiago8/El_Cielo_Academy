import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import heroImage from '../assets/img/cover-about-us.avif';
import { AboutContent } from '../components/AboutContent';
import { Staff } from '../components/Staff';
import { Modal } from '../components/Modal';

export const About = () => {
  const title = 'El Cielo Academy';
  const subTitle = 'The Sky Awaits Beyond Your Fears';

  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    setModalVisible(false);
  };

  return (
    <div>
      <div data-aos="zoom-in">
        <HeroSection 
          backgroundImage={heroImage} 
          title={title} 
          subTitle={subTitle}
        />
      </div>
      <div data-aos="fade-up">
        <AboutContent />
      </div>
      <div data-aos="fade-up">
        <Staff onCardClick={handleCardClick} />
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        name={selectedMember?.name}
        position={selectedMember?.position}
        moreInfo={selectedMember?.moreInfo}
        image2={selectedMember?.image2}
      />
    </div>
  );
};
