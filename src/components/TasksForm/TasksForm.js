import React from 'react';
import { TaskContext } from '../../context/TaskContext';
import styles from './TasksForm.module.css';

const TasksForm = () => {
  const [description, setDescription] = React.useState('');
  const { addTask } = React.useContext(TaskContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (description.trim().length) {
      addTask(description);
    }
    setDescription('');
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="description"
          id="description"
          type="text"
          placeholder="O você vai fazer hoje?"
          className={styles.input}
          value={description}
          onChange={({ target }) => {
            setDescription(target.value);
          }}
        />
        <button className={styles.button}>Criar tarefa</button>
      </form>
    </div>
  );
};

export default TasksForm;
