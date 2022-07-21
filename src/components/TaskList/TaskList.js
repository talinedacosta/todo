import React from 'react';
import styles from './TaskList.module.css';
import { TaskContext } from '../../context/TaskContext';
import Task from '../Task/Task';

const TaskList = () => {
  const { tasks } = React.useContext(TaskContext);

  return (
    <div className={styles.tasks}>
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <Task key={task.id} id={task.id} isComplete={task.done}>
              {task.description}
            </Task>
          );
        })}
    </div>
  );
};

export default TaskList;
