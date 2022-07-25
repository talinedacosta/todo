import React from 'react';
import styles from './TaskActions.module.css';
import { TaskContext } from '../../context/TaskContext';
import { FiCheckCircle, FiClock, FiTrash2, FiMenu, FiX } from 'react-icons/fi';

const TaskActions = ({ id, done }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { removeTask, editTask } = React.useContext(TaskContext);

  function handleOpen() {
    setIsOpen((toggle) => !toggle);
  }

  function handleRemove() {
    removeTask(id);
    setIsOpen(false);
  }

  function handleComplete() {
    editTask(id, { done: !done });
    setIsOpen(false);
  }

  return (
    <div className={styles.actions}>
      <button
        className={`${styles.button} ${styles.menu}`}
        onClick={handleOpen}
      >
        {isOpen ? (
          <FiX className={styles.icon} />
        ) : (
          <FiMenu className={styles.icon} />
        )}
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <button
            className={`${styles.button} ${styles.edit}`}
            onClick={handleComplete}
          >
            {done ? (
              <FiCheckCircle title="Concluída" />
            ) : (
              <FiClock title="Em progresso" />
            )}

            {done ? 'Desfazer' : 'Concluir'}
          </button>

          <button
            className={`${styles.button} ${styles.trash}`}
            onClick={handleRemove}
          >
            <FiTrash2 className={`${styles.icon}  ${styles.trash}`} /> Remover
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskActions;
