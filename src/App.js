import React from 'react';
import './App.css';
import TasksContainer from './components/TasksContainer/TasksContainer';

import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <div className="container">
      <TaskProvider>
        <TasksContainer />
      </TaskProvider>
    </div>
  );
}

export default App;
