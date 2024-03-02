// ChaosButtonGlobal.js
import React from 'react';
import './ChaosButtonGlobal.css';

const ChaosButtonGlobal = ({ onShuffle }) => {
  return (
    <footer className='ChaosButtonGlobal'>
      {<button onClick={onShuffle} className='chaosBtn'>CHAOS</button>}
    </footer>
  );
};

export default ChaosButtonGlobal;
