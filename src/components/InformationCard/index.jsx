import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import babyGirl from "./baby-girl.png";
import woman from "./woman.png";
import qm from "./question-mark.png";
import GlobalModal from "../GlobalModal";
import axios from "axios";


const InformationCard = ({ currentWeek }) => {
  const NHS_SUBSCRIPTION_KEY = '9286783e6cba427d83f51dfb70be451f' || process.env.REACT_APP_NHS_SUBSCRIPTION_KEY;
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");
  const [week, setWeek] = useState("1-2-3-weeks");
  const [trim, setTrim] = useState("1-to-12");

  useEffect(() => {
    setWeek(`${currentWeek}-weeks`);

    if (currentWeek <= 12) {
      setTrim("1-to-12");
    } else if (currentWeek <= 27) {
      setTrim("13-to-27");
    } else {
      setTrim("28-to-40");
    }
  }, [currentWeek]);

  const modalButtonRef = useRef(null);

  const getYouInfo = async () => {
    const info = await axios.get(
      `https://api.nhs.uk/pregnancy/week-by-week/${trim}/${week}/`,
      { headers: { "subscription-key": NHS_SUBSCRIPTION_KEY } }
    );
    const response = info.data.mainEntityOfPage[0].hasPart[0].text;
    setResponse1(response);
  };

  const getBabyInfo = async () => {
    const info = await axios.get(
      `https://api.nhs.uk/pregnancy/week-by-week/${trim}/${week}/`,
      { headers: { "subscription-key": NHS_SUBSCRIPTION_KEY } }
    );
    const response = info.data.mainEntityOfPage[1].mainEntityOfPage[0].text;
    setResponse2(response);
  };

  const getAdditionalInfo = async () => {
    const info = await axios.get(
      `https://api.nhs.uk/pregnancy/week-by-week/${trim}/${week}/`,
      { headers: { "subscription-key": NHS_SUBSCRIPTION_KEY } }
    );
    const response = info.data.mainEntityOfPage[2].mainEntityOfPage[0].text;
    setResponse3(response);
  };

  useEffect(() => {
    getYouInfo();
    getBabyInfo();
    getAdditionalInfo();
  }, []);

  useEffect(() => {
    if (show1 || show2 || show3) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [show1, show2, show3]);

  return (
    <>
      <div className="cards-container" style={{ position: "relative" }}>
        <div className="information-card-container">
          <div className="information-card">
            <div className="information-card-top">
              <h4 className="text-above-image">Your Baby:</h4>
              {/* <p>Text above the image</p> */}
            </div>
            <div className="information-card-bottom">
              <div className="image-container">
                <img
                  src={babyGirl}
                  alt="Card 1"
                  className="information-card-image"
                />
              </div>
              <GlobalModal
                show={show1}
                onClose={() => setShow1(false)}
                hasId={"move-down-modal"}
                buttonRef={modalButtonRef}
                title={<h2>You at {currentWeek} weeks</h2>}
              >
                <div dangerouslySetInnerHTML={{ __html: response1 }}></div>
              </GlobalModal>
              <button ref={modalButtonRef} className="button-link primary-btn primary-btn-green" id="info-card-btn"onClick={() => setShow1(true)}>
                Read More
              </button>
            </div>
          </div>
          <div className="information-card">
            <div className="information-card-top">
              <h4 className="text-above-image">You:</h4>
              {/* <p>Text above the image</p> */}
            </div>
            <div className="information-card-bottom">
              <div className="image-container">
                <img
                  src={woman}
                  alt="Card 2"
                  className="information-card-image"
                />
              </div>
              <GlobalModal
                show={show2}
                onClose={() => setShow2(false)}
                hasId={"move-down-modal"}
                buttonRef={modalButtonRef}
                title={<h2>Baby at {currentWeek} weeks</h2>}
              >
                <div dangerouslySetInnerHTML={{ __html: response2 }}></div>
              </GlobalModal>
              <button ref={modalButtonRef} className="button-link primary-btn primary-btn-green" id="info-card-btn" onClick={() => setShow2(true)}>
                Read More
              </button>
            </div>
          </div>
          <div className="information-card">
            <div className="information-card-top">
              <h4 className="text-above-image">To Consider:</h4>
              {/* <p>Text above the image</p> */}
            </div>
            <div className="information-card-bottom">
              <div className="image-container">
                <img src={qm} alt="Card 3" className="information-card-image" />
              </div>
              <GlobalModal
                show={show3}
                onClose={() => setShow3(false)}
                hasId={"move-down-modal"}
                buttonRef={modalButtonRef}
                title={<h2>Things to think about</h2>}
              >
                <div dangerouslySetInnerHTML={{ __html: response3 }}></div>
              </GlobalModal>
              <button ref={modalButtonRef} className="button-link primary-btn primary-btn-green" id="info-card-btn" onClick={() => setShow3(true)}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationCard;
