import React from 'react';
import './TaskTitle.css';

const TaskTitle = ({ title, children }) => {
  return (
    <div className='TaskTitle'>
        <p className='task-title-title'>{title}</p>
        {children}  
    </div>
  );
}

export default TaskTitle;
