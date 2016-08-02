import React, { Component, PropTypes } from 'react';
import styles from './ControlBar.css';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } from '../../app/actions/visibilityFilter';


class ControlBar extends Component {
  static propTypes = {

    visibilityFilter: PropTypes.string.isRequired,
    nextId: PropTypes.number.isRequired,

    addTask: PropTypes.func.isRequired,
    completeAll: PropTypes.func.isRequired,

    setVisibilityFilter: PropTypes.func.isRequired,

    incrementId: PropTypes.func.isRequired
  };


  handleAddClick() {

    let value = this.input.value;
    this.input.value = "";

    this.props.incrementId();
    var newId = this.props.nextId;
    console.log("newId: ", newId);

    this.props.addTask(newId, value);
  }

  handleVisibilityFilterClick(event) {

    event.preventDefault();

    this.props.setVisibilityFilter(this.select.value);


  }

  render() {

    const { visibilityFilter, completeAll, setVisibilityFilter  } = this.props;

    return (
      <div className={styles.ControlBar}>
        <div className={styles.Basic}>
          <button onClick={() => completeAll()}>
            <i className="fa fa-check"></i> All
          </button>
        </div>
        <div className={styles.AddTask}>
          <input type="text" ref={node => {this.input = node;}} />
          <button onClick={() => this.handleAddClick()}>
            Add
          </button>
        </div>
        <div className={styles.Filter}>
          <span>
            Show <select ref={node => {this.select = node;}} value={visibilityFilter} onChange={(event) => this.handleVisibilityFilterClick(event)}>
              <option value={SHOW_ALL}>All</option>
              <option value={SHOW_COMPLETED}>Completed</option>
              <option value={SHOW_UNCOMPLETED}>Uncompleted</option>
            </select>
          </span>
        </div>
      </div>
    );
  }
}

export default ControlBar;
