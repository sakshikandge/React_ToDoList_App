import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTask, toggleCompletion, deleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
