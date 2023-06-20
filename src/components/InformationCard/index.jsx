import React from 'react';
import './styles.css';
import babyGirl from './baby-girl.png';
import woman from './woman.png'
import GlobalModal from '../GlobalModal';
import { useState, useEffect } from 'react';
import axios from 'axios';

const InformationCard = () => {
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState("");
  const [week, setWeek] = useState("1-2-3-weeks");
  const [trim, setTrim] = useState("1-to-12");
  useEffect(() => {
    const getInfo = async () => {
      
 
      const info = await axios.get(
        `https://api.nhs.uk/pregnancy/week-by-week/${trim}/${week}/`,
        { headers: { "subscription-key": "9286783e6cba427d83f51dfb70be451f" } }
        );
        const response = info.data.mainEntityOfPage[0].hasPart[0].text;
      console.log(response);
      setResponse(response);
    };
    getInfo();
  }, []);
  
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
            <button className="button-link" onClick={() => setShow(true)}>Read More</button>
            <GlobalModal show={show} onClose={() => setShow(false)} children={<div dangerouslySetInnerHTML={{ __html: response }}>
        </div>}></GlobalModal>
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
            <button className="button-link" onClick={() => setShow(true)}>Read More</button>
            {/* <GlobalModal show={show} onClose={() => setShow(false)}></GlobalModal> */}
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
            <button className="button-link" onClick={() => setShow(true)}>Read More</button>
            {/* <GlobalModal show={show} onClose={() => setShow(false)}></GlobalModal> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
