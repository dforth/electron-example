import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import Tasks from './Tasks';
import ControlBar from './ControlBar';


class Home extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    visibilityFilter: PropTypes.string.isRequired,
    nextId: PropTypes.number.isRequired,

    //Tasks Actions
    addTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    completeAll: PropTypes.func.isRequired,

    //VisibilityFilter Actions
    setVisibilityFilter: PropTypes.func.isRequired,

    //NextId Actions
    incrementId: PropTypes.func.isRequired
  };

  render() {

    const {
      tasks,
      visibilityFilter,
      nextId,

      addTask,
      removeTask,
      toggleTask,
      completeAll,

      setVisibilityFilter,

      incrementId

    } = this.props;

    return (
      <div>
        <div className="container">
          <h1>Todo Example <small><Link to="/info">Info</Link></small></h1>
          <ControlBar

            visibilityFilter={visibilityFilter}
            nextId={nextId}
            addTask={addTask}
            completeAll={completeAll}
            setVisibilityFilter={setVisibilityFilter}

            incrementId={incrementId}
          />
          <Tasks
            tasks={tasks}
            visibilityFilter={visibilityFilter}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />
        </div>
      </div>
    );
  }
}

export default Home;
