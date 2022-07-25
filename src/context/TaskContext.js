import React, { useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const TaskContext = React.createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${API_URL}/tasks`);
        if (!response.data) throw new Error();
        setTasks(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  async function addTask(description) {
    const task = {
      done: false,
      description: description,
    };

    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(`${API_URL}/tasks`, task);
      if (!response.data) throw new Error();
      setTasks([response.data, ...tasks]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function removeTask(id) {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.delete(`${API_URL}/tasks/${id}`);
      if (!response.data) throw new Error();
      const newArray = tasks.filter((curr) => curr.id !== id);
      setTasks(newArray);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function editTask(id, body) {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.patch(`${API_URL}/tasks/${id}`, body);
      if (!response.data) throw new Error();
      const { description, done } = response.data;
      const filtered = tasks.map((curr) =>
        curr.id === id
          ? { ...curr, done: done, description: description }
          : curr,
      );
      setTasks(filtered);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <TaskContext.Provider
      value={{ tasks, error, loading, addTask, removeTask, editTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
