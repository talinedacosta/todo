import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <TaskProvider>
          <TaskInput />
          <TaskList />
        </TaskProvider>
      </div>
    </div>
  );
}

export default App;
