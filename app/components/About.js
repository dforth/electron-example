import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './About.css';


export default class About extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
          <h2>About</h2>
          <p>This is a test</p>
        </div>
      </div>
    );
  }
}
