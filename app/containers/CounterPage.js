import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tasks from '../components/Tasks';
import * as TaskActions from '../actions/tasks';
import * as visibilityFilterActions from '../actions/visibilityFilter';

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    visibilityFilter: state.visibilityFilter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
