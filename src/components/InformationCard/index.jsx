import React from 'react';
import './styles.css';
import babyGirl from './baby-girl.png';
import woman from './woman.png'

const InformationCard = () => {
  return (
    <div className="cards-container">
      <div className="information-card-container">
        <div className="information-card">
          <div className="information-card-top">
            <h4>Your Baby:</h4>
            <p>Text above the image</p>
          </div>
          <div className="information-card-bottom">
            <div className="image-container">
              <img src={babyGirl} alt="Card 1" className="information-card-image" />
            </div>
            <a href="#" className="button-link">Read More</a>
          </div>
        </div>
        <div className="information-card">
          <div className="information-card-top">
            <h4>You:</h4>
            <p>Text above the image</p>
          </div>
          <div className="information-card-bottom">
            <div className="image-container">
              <img src={woman} alt="Card 2" className="information-card-image" />
            </div>
            <a href="#" className="button-link">Read More</a>
          </div>
        </div>
        <div className="information-card">
          <div className="information-card-top">
            <h4>To Consider</h4>
            <p>Text above the image</p>
          </div>
          <div className="information-card-bottom">
            <div className="image-container">
              <img src={babyGirl} alt="Card 3" className="information-card-image" />
            </div>
            <a href="#" className="button-link">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;