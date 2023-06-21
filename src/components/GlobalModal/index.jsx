import React, { useEffect, useRef } from 'react';
import './GlobalModal.css';

const GlobalModal = props => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (props.show) {
      calculateModalPosition();
    }
  }, [props.show]);

  const calculateModalPosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight; //get height and width of viewport on any screen

    const modalWidth = modalRef.current.offsetWidth;
    const modalHeight = modalRef.current.offsetHeight; //get the hight and width of modal

    const scrollY = window.scrollY; //get position of scroll (how many pixels have been scrolled)

    const top = scrollY + (viewportHeight - modalHeight) / 2;
    const left = (viewportWidth - modalWidth) / 2; //values for setting top and left 

    modalRef.current.style.top = `${top}px`;
    modalRef.current.style.left = `${left}px`; //set top and left positions
  };

  if (!props.show) {
    return null;
  }

  return (
    <div
      className="modal"
      onClick={props.onClose}
      ref={modalRef}
    >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{props.title}</h3>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          {props.footer}
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default GlobalModal;