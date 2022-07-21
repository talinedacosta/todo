import React, { useEffect } from 'react';
import * as api from '../services/api';

const TaskContext = React.createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.TASKS_GET();
      if (response) setTasks(response);
    }

    fetchData();
  }, []);

  async function addTask(content) {
    const task = {
      done: false,
      description: content,
    };

    const response = await api.TASK_CREATE(task);
    if (response) setTasks([...tasks, response]);
  }

  async function removeTask(id) {
    const response = await api.TASK_DELETE(id);
    if (response) {
      const filtered = tasks.filter((curr) => curr.id !== id);
      setTasks(filtered);
    }
  }

  async function completeTask(id) {
    const task = await api.TASK_GETBYID(id);
    if (!task) return;

    const response = await api.TASK_UPDATE(id, { ...task, done: !task.done });

    if (response) {
      const filtered = tasks.map((curr) =>
        curr.id === id ? { ...curr, done: !curr.done } : curr,
      );
      setTasks(filtered);
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, completeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
