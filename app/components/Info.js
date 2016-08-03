import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Info.css';


export default class Info extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.infoContent}>
          <h2>Info</h2>
          <p>
            TBD Usefull text here.
            
          </p>
        </div>
      </div>
    );
  }
}
