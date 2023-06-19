import React, {useState, useEffect} from 'react';
import './styles.css';
import babyGirl from './baby-girl.png';
import woman from './woman.png'

import GlobalModal from '../GlobalModal';

const InformationCard = () => {
  const [show, setShow] = useState(false)
  // useEffect(() => {
  //   if (show) {
  //     document.body.classList.add('modal-open');
  //   } else {
  //     document.body.classList.remove('modal-open');
  //   }
  // }, [show]);
  return (
    <>
        <GlobalModal show={show}></GlobalModal>
      <div className="cards-container" style={{position:'relative'}}>
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
              {/* <button onClick={setShow(true)} className="button-link">Read More</button> */}
              <button onClick={() => {setShow(true)}} className="button-link">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationCard;