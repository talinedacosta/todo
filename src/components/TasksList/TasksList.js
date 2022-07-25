import React from 'react';
import styles from './TasksList.module.css';
import { TaskContext } from '../../context/TaskContext';
import Task from '../Task/Task';
import { FiMeh } from 'react-icons/fi';

const TasksList = () => {
  const { tasks } = React.useContext(TaskContext);

  return (
    <div className={styles.tasks}>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return <Task key={task.id} {...task} />;
        })
      ) : (
        <div className={styles.empty}>
          Sem tarefas.... te falta objetivo ou determinação?{' '}
          <FiMeh className={styles.icon} />
        </div>
      )}
    </div>
  );
};

export default TasksList;
