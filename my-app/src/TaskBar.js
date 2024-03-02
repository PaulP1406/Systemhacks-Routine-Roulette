import React from 'react';
import ChaosButtonLocal from './ChaosButtonLocal';
import './TaskBar.css';
import { useState } from 'react';

const TaskBar = ({ name }) => {
    const [isChaos, setIsChaos] = useState(false);
  
    const toggleChaos = () => {
      setIsChaos(!isChaos);
    };
  
    return (
      <div className={`task-bar ${isChaos ? 'chaos' : ''}`}>
        {name}
        <ChaosButtonLocal onClick={toggleChaos} isChaos={isChaos} />
      </div>
    );
  };
  
  export default TaskBar;