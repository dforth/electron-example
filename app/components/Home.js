import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import Tasks from './Tasks';


export default class Home extends Component {
  static propTypes = {
    tasks: PropTypes.number.isRequired,
    visibilityFilter: PropTypes.number.isRequired
  };

  render() {

    const { tasks, visibilityFilter } = this.props;

    return (
      <div>
        <div className={styles.container}>
          <h1>Todo Example <small><Link to="/about">About</Link></small></h1>
          <ControlBar visibilityFilter={visibilityFilter} />
          <Tasks tasks={tasks}/>
        </div>
      </div>
    );
  }
}
