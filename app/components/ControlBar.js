import React, { Component, PropTypes } from 'react';
import styles from './ControlBar.css';


class Task extends Component {
  static propTypes = {
    visibilityFilter: PropTypes.number.isRequired
  };

  render() {

    const { visibilityFilter } = this.props;

    return (
      <div className={styles.ControlBar}>
        Control Bar
      </div>
    );
  }
}

export default Tasks;
