import React, { Component } from 'react';
import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TaskActions from '../actions/tasks';
import * as VisibilityFilterActions from '../actions/visibilityFilter';

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    visibilityFilter: state.visibilityFilter
  };
}

function mapDispatchToProps(dispatch) {

  const actions = Object.assign(TaskActions, VisibilityFilterActions);
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
