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
    const viewportHeight = window.innerHeight;

    const modalWidth = modalRef.current.offsetWidth;
    const modalHeight = modalRef.current.offsetHeight;

    const scrollY = window.scrollY || window.pageYOffset;

    const top = scrollY + (viewportHeight - modalHeight) / 2;
    const left = (viewportWidth - modalWidth) / 2;

    modalRef.current.style.top = `${top}px`;
    modalRef.current.style.left = `${left}px`;
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
