import React from 'react';
import './styles.css';
import pramImage from './mothers.png'

const ProgressBar = ({ dueDate, currentWeek }) => {
  const calculateProgress = () => {
    const totalWeeks = Math.ceil((dueDate - new Date()) / (1000 * 60 * 60 * 24 * 7));
    let progressPercentage;

    if (currentWeek <= 0) {
      progressPercentage = 0;
    } else if (currentWeek >= 40) {
      progressPercentage = 100;
    } else {
      progressPercentage = ((currentWeek - 1) / 39) * 100;
    }

    return progressPercentage;
  };

  const renderMarkers = () => {
    const markers = [
      { week: 0, label: 'Week    0' },
      { week: 13, label: 'Week 13' },
      { week: 27, label: 'Week 27' },
      { week: 40, label: 'Week 40' }
    ];

    return markers.map((marker, index) => (
      <div className="progress-bar-marker" key={index} style={{ left: `${(marker.week / 40) * 100}%` }}>
        <span className="progress-bar-week">{marker.label}</span>
      </div>
    ));
  };

  const renderTrimesterText = () => {
    if (currentWeek <= 13) {
      return 'Trimester 1';
    } else if (currentWeek <= 27) {
      return 'Trimester 2';
    } else {
      return 'Trimester 3';
    }
  };

  const renderPram = () => {
    const progressPercentage = calculateProgress();
    const babyPram = {
      left: `${progressPercentage}%`,
      transform: 'translateX(-50%)'
    };

    return (
      <div className="baby-icon" style={babyPram}>
       <img className="baby-icon__image" src={pramImage} alt="pram"/>
      </div>
    );
  };

  return (
    <div className="progress-bar-container">
      <div>
        <h2 className='my-journey'>My Journey</h2>
      </div>
        <h3 className="trimester">{renderTrimesterText()}</h3>
      <div className="progress-bar">
        {renderMarkers()}
        <div className="progress-bar-fill" style={{ width: `${calculateProgress()}%` }}></div>
        {renderPram()}
      </div>
      <p className="marker-week">{`Week: ${currentWeek}`}</p>
    </div>
  );
};

export default ProgressBar;

