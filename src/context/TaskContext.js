import React, { useEffect } from 'react';

const TaskContext = React.createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState(() => {
    const storaged_tasks = window.localStorage.getItem('tasks');
    if (storaged_tasks) return JSON.parse(storaged_tasks);
    else return [];
  });

  const prevTasksRef = React.useRef();

  useEffect(() => {
    prevTasksRef.current = tasks;
  });

  const tasksPreviousValue = prevTasksRef.current ?? tasks;

  useEffect(() => {
    if (tasksPreviousValue !== tasks) {
      window.localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, tasksPreviousValue]);

  function addTask(content) {
    const task = {
      id: new Date().getTime().toString(),
      isComplete: false,
      content: content,
    };

    setTasks([...tasks, task]);
  }

  function removeTask(id) {
    const filtered = tasks.filter((curr) => curr.id !== id);
    setTasks(filtered);
  }

  function completeTask(id) {
    const filtered = tasks.map((curr) =>
      curr.id === id ? { ...curr, isComplete: !curr.isComplete } : curr,
    );
    setTasks(filtered);
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, completeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
