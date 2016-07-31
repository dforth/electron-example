import React, { Component, PropTypes } from 'react';
import Task from './Task';
import styles from './Counter.css';


class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.number.isRequired
  };

  render() {

    const { tasks } = this.props;

    return (
      <div>
        <ul>
          { tasks.map(task =>
            <task task={task}/>
          )}
        </ul>
      </div>
    );
  }
}

export default Tasks;
