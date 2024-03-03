// TaskBar.js
import React from 'react';
import './TaskBar.css';

const TaskBar = ({ name }) => {
  return (
    <div className="task-bar-content">
      {name}
    </div>
  );
};

export default TaskBar;
