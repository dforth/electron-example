import React, { Component, PropTypes } from 'react';
import Task from './Task';
import styles from './Tasks.css';


class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  };

  render() {

    const { tasks } = this.props;

    return (
      <div>
        <ul>
          { tasks.map(task =>
            <Task key={task.id} task={task} />
          )}
        </ul>
      </div>
    );
  }
}

export default Tasks;
