import React from 'react';
import '../styles/Modal.css';

export const Modal = ({ isVisible, onClose, name, position, moreInfo, image2 }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={image2} alt={name} />
          </div>
          <div className="modal-info">
            <h3>{name}</h3>
            <p>{position}</p>
            <p>{moreInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
