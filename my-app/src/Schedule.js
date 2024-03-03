// Schedule.js
import React, { useState } from 'react';
import TaskManager from './TaskManager';
import './Schedule.css';
import ChaosButtonGlobal from './ChaosButtonGlobal';

const ScheduleComponent = () => {
  const [morningTasks, setMorningTasks] = useState([]);
  const [afternoonTasks, setAfternoonTasks] = useState([]);
  const [eveningTasks, setEveningTasks] = useState([]);

  // Shuffle function that works on any tasks array
  const shuffleTasks = (tasks) => {
    const shuffled = [...tasks];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Function to shuffle all tasks
  const handleShuffleAll = () => {
    setMorningTasks(shuffleTasks(morningTasks));
    setAfternoonTasks(shuffleTasks(afternoonTasks));
    setEveningTasks(shuffleTasks(eveningTasks));
  };

  return (
    <div className="Schedule">
      <TaskManager title="Morning" tasks={morningTasks} setTasks={setMorningTasks} />
      <TaskManager title="Afternoon" tasks={afternoonTasks} setTasks={setAfternoonTasks} />
      <TaskManager title="Evening" tasks={eveningTasks} setTasks={setEveningTasks} />
      <ChaosButtonGlobal onShuffle={handleShuffleAll} />
    </div>
  );
};

export default ScheduleComponent;
