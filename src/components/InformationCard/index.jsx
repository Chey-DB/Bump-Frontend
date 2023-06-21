import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import babyGirl from "./baby-girl.png";
import woman from "./woman.png";
import GlobalModal from "../GlobalModal";
import axios from "axios";

const InformationCard = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [response, setResponse] = useState("");
  const [week, setWeek] = useState("1-2-3-weeks");
  const [trim, setTrim] = useState("1-to-12");
  
  const modalButtonRef = useRef(null);

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
              <h4>Your Baby:</h4>
              <p>Text above the image</p>
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
              >
                  <div dangerouslySetInnerHTML={{ __html: response }}></div>
                </GlobalModal>
              <button ref={modalButtonRef} className="button-link" onClick={() => setShow1(true)}>
                Read More
              </button>
            </div>
          </div>
          <div className="information-card">
            <div className="information-card-top">
              <h4>You:</h4>
              <p>Text above the image</p>
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
              >
                <div dangerouslySetInnerHTML={{ __html: response }}></div>
              </GlobalModal>
              <button ref={modalButtonRef} className="button-link" onClick={() => setShow2(true)}>
                Read More
              </button>
            </div>
          </div>
          <div className="information-card">
            <div className="information-card-top">
              <h4>To Consider</h4>
              <p>Text above the image</p>
            </div>
            <div className="information-card-bottom">
              <div className="image-container">
                <img
                  src={babyGirl}
                  alt="Card 3"
                  className="information-card-image"
                />
              </div>
              <GlobalModal
                show={show3}
                onClose={() => setShow3(false)}
                hasId={"move-down-modal"}
                buttonRef={modalButtonRef}
              >
                  <div dangerouslySetInnerHTML={{ __html: response }}></div>
              </GlobalModal>
              <button ref={modalButtonRef} className="button-link" onClick={() => setShow3(true)}>
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
