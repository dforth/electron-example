export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export function addTask() {
  return {
    type: ADD_TASK
  };
}

export function removeTask() {
  return {
    type: REMOVE_TASK
  };
}

export function toggleTask() {
  return {
    type: TOGGLE_TASK
  };
}

export function setVisibilityFilter() {
  return {
    type: SET_VISIBILITY_FILTER
  };
}
