import React from 'react';
import { TaskContext } from '../../context/TaskContext';
import styles from './Task.module.css';

const Task = ({ id, isComplete, children }) => {
  const { removeTask, completeTask } = React.useContext(TaskContext);

  function handleComplete() {
    completeTask(id);
  }

  function handleRemove() {
    removeTask(id);
  }

  return (
    <div
      className={`${styles.wrapper} ${
        isComplete ? styles.completed : styles.default
      }`}
      id={id}
    >
      <header className={styles.header}>
        <label className={styles.label} htmlFor={`i${id}`}>
          {isComplete ? 'done' : 'done?'}
          <input
            id={`i${id}`}
            className={styles.checkbox}
            type="checkbox"
            defaultChecked={isComplete ? 'checked' : false}
            onChange={handleComplete}
          />
        </label>
        <button className={styles.remove} onClick={handleRemove}>
          trash
        </button>
      </header>

      <p className={styles.content}>{children}</p>
    </div>
  );
};

export default Task;
