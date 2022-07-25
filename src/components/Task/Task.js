import React from 'react';
import styles from './Task.module.css';
import TaskActions from '../TaskActions/TaskActions';

const Task = ({ id, done, description, createdAt }) => {
  function formattedDate() {
    const created = new Date(createdAt);
    const formatted = created.toLocaleDateString();
    return formatted;
  }

  return (
    <div className={`${styles.task} ${done ? styles.completed : ''}`} id={id}>
      <div className={styles.header}>
        <div className={styles.date}>{formattedDate()}</div>
        <TaskActions id={id} done={done} createdAt={createdAt} />
      </div>
      <div className={styles.content}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Task;
