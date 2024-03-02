// TaskBar.js
import React from 'react';
import './TaskBar.css'; // Make sure you have CSS for TaskBar

const TaskBar = ({ name }) => {
  return (
    <div className="task-bar-content">
      {name}
    </div>
  );
};

export default TaskBar;
