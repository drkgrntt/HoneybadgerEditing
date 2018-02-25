import {
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  FETCH_USER
} from '../actions/types';

const INITIAL_STATE = {
  user: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, ...INITIAL_STATE, user: action.payload, err: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload.message };
    case LOGOUT_USER:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
