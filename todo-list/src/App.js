import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <h1> My ToDo List</h1> 
      
      <TaskForm addTask={addTask} />
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
