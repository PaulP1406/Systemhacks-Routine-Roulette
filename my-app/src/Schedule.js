import React from 'react';
import TaskTitle from './TaskTitle';
import TaskBar from './TaskBar';

const ScheduleComponent = () => {
  return (
    <div className="Schedule">
      <TaskTitle title="MORNING" />
      <TaskBar name="wake up" />
      <TaskBar name="brush teeth" />
      <TaskBar name="brush teeth" />

      {/* Repeat for Afternoon and Evening */}
      <TaskTitle title="AFTERNOON" />
      <TaskBar name="Coffee" />
      <TaskBar name="Work" />
      <TaskBar name="Coffee" />

      <TaskTitle title="EVENING" />
      <TaskBar name="Go home" />
      <TaskBar name="gym" />
      <TaskBar name="Sleep" />    
      

    </div>
  );
};

export default ScheduleComponent;
