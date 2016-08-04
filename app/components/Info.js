import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Info.css';


export default class Info extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-2x" />
          </Link>
        </div>
        <div className="title">
          <h2>Info</h2>  
        </div>

        <div className={styles.infoContent}>
          <p>
            TBD Usefull text here.

          </p>
        </div>
      </div>
    );
  }
}
