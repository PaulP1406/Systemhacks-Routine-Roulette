import React, { useState } from 'react';
import DraggableList from 'react-draggable-list';
import TaskTitle from './TaskTitle';
import TaskBar from './TaskBar';

const ScheduleComponent = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Morning Task', timeOfDay: 'MORNING' },
    { id: 2, name: 'Afternoon Task', timeOfDay: 'AFTERNOON' },
    { id: 3, name: 'Evening Task', timeOfDay: 'EVENING' },
    // Add as many tasks as you need
  ]);

  const onListChange = (newList) => {
    setTasks(newList);
  };

  const listItem = ({ item, itemSelected, dragHandle }) => {
    return (
      <div>
        <TaskTitle title={item.timeOfDay} />
        <div {...dragHandle}>
          <TaskBar name={item.name} />
        </div>
      </div>
    );
  };

  return (
    <div className="Schedule">
      <DraggableList
        itemKey="id"
        template={listItem}
        list={tasks}
        onMoveEnd={onListChange}
        container={() => document.body}
      />
    </div>
  );
};

export default ScheduleComponent;
