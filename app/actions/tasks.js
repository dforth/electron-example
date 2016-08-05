export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const SET_TASKS = 'SET_TASKS';

export function addTask(id, name) {
  return {
    type: ADD_TASK,
    id: id,
    name: name
  };
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    id: id
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    id
  };
}

export function completeAll() {
  return {
    type: COMPLETE_ALL
  };
}

export function setTasks(tasks) {
  return {
    type: SET_TASKS,
    tasks: tasks
  };
}
