import React, { Component, PropTypes } from 'react';
import styles from './Task.css';


class Task extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired
  };

  render() {

    const { task, removeTask, toggleTask } = this.props;

    let checkButtonContent = undefined;

    if (task.completed) {
      checkButtonContent = (
        <i className="fa fa-check-square-o"></i>
      );
    } else {
      checkButtonContent = (
        <i className="fa fa-square-o"></i>
      );
    }


    var taskClasses = styles.name;

    if (task.completed) {
      taskClasses = styles.checked;
    }


    return (
      <li>
          <button className={styles.btn} onClick={() => toggleTask(task.id)}>
            {checkButtonContent}
          </button>
          <span className={taskClasses}>{task.name}</span>
          <button className={styles.btn} onClick={() => removeTask(task.id)}>
            <i className="fa fa-remove"></i>
          </button>
      </li>
    );
  }
}

export default Task;
