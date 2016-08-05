export const INCREMENT_ID = 'INCREMENT_ID';
export const SET_NEXT_ID = 'SET_NEXT_ID';

export function incrementId() {
  return {
    type: INCREMENT_ID
  };
}

export function setNextId(value) {
  return {
    type: SET_NEXT_ID,
    value: value
  };
}
