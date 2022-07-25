import React from 'react';
import TasksHeader from '../TasksHeader/TasksHeader';
import TasksList from '../TasksList/TasksList';
import { TaskContext } from '../../context/TaskContext';
import Loading from '../../helper/Loading/Loading';
import Error from '../../helper/Error/Error';
import TasksForm from '../TasksForm/TasksForm';

const TasksContainer = () => {
  const { loading, error } = React.useContext(TaskContext);

  return (
    <>
      <TasksHeader />
      <TasksForm />
      {loading && <Loading />}
      {error && (
        <Error error="Ocorreu um erro. Entre em contato com o responsável pela aplicação." />
      )}
      <TasksList />
    </>
  );
};

export default TasksContainer;
