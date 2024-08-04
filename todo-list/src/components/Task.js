import React, { useState } from 'react';
import { FaEdit, FaCheck, FaTimes, FaTrash } from 'react-icons/fa';

const Task = ({ task, updateTask, toggleCompletion, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask({ ...task, title, description, lastUpdated: new Date() });
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleUpdate}><FaCheck /></button>
          <button onClick={() => setIsEditing(false)}><FaTimes /></button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={() => setIsEditing(true)}><FaEdit /></button>
          <button
            onClick={() => toggleCompletion(task.id)}
            className={task.completed ? 'button-done' : ''}
          >
            {task.completed ? "Done" : "Mark as Done"}
          </button>
          <button onClick={() => deleteTask(task.id)} className="trash-button"><FaTrash />
</button>

          {task.description && (
            <div>
              <p>{task.description}</p>
              <small>Last Updated: {new Date(task.lastUpdated).toLocaleString()}</small>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Task;
