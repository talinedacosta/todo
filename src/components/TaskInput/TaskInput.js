import React from 'react';
import styles from './TaskInput.module.css';
import { TaskContext } from '../../context/TaskContext';

const TaskInput = () => {
  const { addTask } = React.useContext(TaskContext);

  const [task, setTask] = React.useState('');

  function handleCLick() {
    handleAddTask();
  }

  function handleEnter(event) {
    if (event.code === 'Enter') {
      handleAddTask();
    }
  }

  function handleAddTask() {
    if (!task.trim().length) return;
    addTask(task);
    setTask('');
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        onKeyDown={handleEnter}
        type="text"
        name="task"
        id="task"
        placeholder="type here..."
        value={task}
        onChange={({ target }) => setTask(target.value)}
      />
      <button className={styles.button} onClick={handleCLick}>
        add
      </button>
    </div>
  );
};

export default TaskInput;
