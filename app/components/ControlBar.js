import React, { Component, PropTypes } from 'react';
import styles from './ControlBar.css';


class ControlBar extends Component {
  static propTypes = {
    visibilityFilter: PropTypes.string.isRequired
  };

  render() {

    const { visibilityFilter } = this.props;

    return (
      <div className={styles.ControlBar}>
        VisibilityFilter: {visibilityFilter}
      </div>
    );
  }
}

export default ControlBar;
