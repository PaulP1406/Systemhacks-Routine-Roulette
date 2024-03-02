// ChaosButtonGlobal.js
import React from 'react';

const ChaosButtonGlobal = ({ onShuffle }) => {
  return (
    <div className='ChaosButtonGlobal'>
      <button onClick={onShuffle}>CHAOS!!</button>
    </div>
  );
};

export default ChaosButtonGlobal;
