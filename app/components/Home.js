import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import Tasks from './Tasks';
import ControlBar from './ControlBar';


class Home extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    visibilityFilter: PropTypes.string.isRequired
  };

  render() {

    //const { tasks } = this.props;
    const { tasks, visibilityFilter } = this.props;
    //var tasks = [];
    //var visibilityFilter = "";

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

export default Home;
