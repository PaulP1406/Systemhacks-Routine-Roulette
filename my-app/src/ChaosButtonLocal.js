import React from 'react';
//import './ChaosButtonLocal.css'; // You should create a ChaosButtonLocal.css

const ChaosButtonLocal = ({ onClick, isChaos }) => {
  return (
    <button className={`ChaosButtonLocal ${isChaos ? 'active' : ''}`} onClick={onClick}>
      {/* Button text or icon goes here */}
    </button>
  )
}

export default ChaosButtonLocal;
