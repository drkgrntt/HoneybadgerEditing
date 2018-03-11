import {
  FETCH_ABOUT,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ABOUT:
      return action.payload;
    default:
      return state;
  }
};
