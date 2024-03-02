// TaskBar.js
import React from 'react';
import './TaskBar.css'; // Make sure you have CSS for TaskBar

const TaskBar = ({ name, onDelete }) => {
  return (
    <div className="task-bar-content">
      {name}
      {/* <button className="delete-task-btn" onClick={onDelete}>
        Delete
      </button> */}
    </div>
  );
};

export default TaskBar;
