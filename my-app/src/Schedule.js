import React from 'react';
import TaskTitle from './TaskTitle';
import TaskBar from './TaskBar';

const ScheduleComponent = () => {
  return (
    <div className="Schedule">
      <TaskTitle title="MORNING" />
      <TaskBar name="Morning Task" />
      {/* Repeat for Afternoon and Evening */}
      <TaskTitle title="AFTERNOON" />
      <TaskBar name="Afternoon Task" />
      <TaskTitle title="EVENING" />
      <TaskBar name="Evening Task" />
    </div>
  );
};

export default ScheduleComponent;
