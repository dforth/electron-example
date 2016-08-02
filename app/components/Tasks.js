import React, { Component, PropTypes } from 'react';
import Task from './Task';
import styles from './Tasks.css';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } from '../../app/actions/visibilityFilter';


const getVisibleTasks = (tasks, filter) => {
  console.log('here');
  switch(filter) {
    case SHOW_ALL:
      return tasks;
    case SHOW_COMPLETED:
      return tasks.filter(task => task.completed);
    case SHOW_UNCOMPLETED:
      return tasks.filter(task => !task.completed);
  }
};

class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    visibilityFilter: PropTypes.string.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired
  };

  render() {

    const { tasks, visibilityFilter, removeTask, toggleTask } = this.props;

    var visibleTasks = getVisibleTasks(tasks, visibilityFilter);

    return (
      <div className={styles.Tasks}>
        <ul>
          { visibleTasks.map(task =>
            <Task
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleTask={toggleTask}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default Tasks;
