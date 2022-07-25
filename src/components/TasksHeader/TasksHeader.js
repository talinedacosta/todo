import React from 'react';
import styles from './TasksHeader.module.css';
import { FiCheckCircle } from 'react-icons/fi';

const TasksHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <FiCheckCircle />
        Tarefas diárias
      </h1>
      <p className={styles.description}>
        Organizar suas tarefas em uma lista vai te dar mais segurança e sensação
        de controle sobre tudo que precisa ser concluído
      </p>
    </div>
  );
};

export default TasksHeader;
