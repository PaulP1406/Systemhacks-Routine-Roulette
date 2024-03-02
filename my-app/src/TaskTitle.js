import React from 'react';
//import './TaskTitle.css'; // You should create a TaskTitle.css

const TaskTitle = ({ title }) => {
  return (
    <div className='TaskTitle'>
        {title}
    </div>
  )
}

export default TaskTitle;
