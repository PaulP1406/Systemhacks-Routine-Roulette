// TaskManager.js
import React, { useState } from 'react';
import TaskBar from './TaskBar';
import './TaskManager.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskManager = ({ title, tasks, setTasks }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const addTask = () => {
    if (newTaskName.trim() !== '') {
      const newTask = {
        id: `task-${new Date().getTime()}`, // Unique ID for each task
        name: newTaskName
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskName(''); // Reset the input field
    }
  };

  const deleteTask = (taskIdToDelete) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskIdToDelete));
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);

    setTasks(reorderedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={`droppable-${title}`}>
        {(provided) => (
          <div
            className="task-manager"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="task-title">{title}</div>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={snapshot.isDragging ? 'task-bar dragging' : 'task-bar'}
                  >
                    <TaskBar name={task.name} />
                    <button
                      className="delete-task-btn"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            <div className="new-task-container">
              <input
                className="new-task-input"
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="Enter new task name"
              />
              <button className="add-task-btn" onClick={addTask}>
                + New
              </button>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskManager;
