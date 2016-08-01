import React, { Component, PropTypes } from 'react';
import styles from './Task.css';


class Task extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired
  };

  render() {

    const { task } = this.props;

    return (
      <li>
          {task.name}
      </li>
    );
  }
}

export default Task;
