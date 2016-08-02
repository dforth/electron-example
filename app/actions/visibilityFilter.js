export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_UNCOMPLETED = 'SHOW_UNCOMPLETED';

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
}
