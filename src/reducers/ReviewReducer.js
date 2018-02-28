import {
  FETCH_REVIEWS,
  FETCH_REVIEW
} from '../actions/types';

const INITIAL_STATE = {
  reviewFormValues: {},
  selectedUid: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REVIEWS:
      return action.payload;
    case FETCH_REVIEW:
      return { ...state, reviewFormValues: action.payload[0], selectedUid: action.payload[1] };
    default:
      return state;
  }
};
