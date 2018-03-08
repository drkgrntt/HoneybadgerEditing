import {
  FETCH_EDITED_WORKS,
  FETCH_EDITED_WORK
} from '../actions/types';

const INITIAL_STATE = {
  editedWorkFormValues: {}, 
  selectedUid: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EDITED_WORKS:
      return action.payload;
    case FETCH_EDITED_WORK:
      return { ...state, editedWorkFormValues: action.payload[0], selectedUid: action.payload[1] };
    default:
      return state;
  }
};