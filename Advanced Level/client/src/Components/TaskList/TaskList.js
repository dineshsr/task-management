import React, { useContext } from 'react';

// components
import TaskItem from '../TaskItem/TaskItem';

// context
import { store } from '../../context';

function TaskList() {
  const { state } = useContext(store);
  const { tasks, archived } = state;

  if (!tasks || !archived) {
    return null;
  }

  // task functions
  const completeTask = (taskId) => {};

  const editTask = (taskId) => {};

  const deleteTask = (taskId) => {};

  if (!Object.keys(tasks).length) {
    return (
      <div
        style={{
          marginTop: '90px',
          padding: '20px',
          fontSize: '2em',
          textAlign: 'center',
        }}
      >
        To create one press + button
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '100px' }}>
      {Object.keys(tasks).map((taskId) => {
        const task = tasks[taskId];
        return (
          <TaskItem
            key={taskId}
            {...task}
            completeTask={completeTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
