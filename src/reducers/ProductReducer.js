import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT
} from '../actions/types';

const INITIAL_STATE = {
  productFormValues: {},
  selectedUid: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case FETCH_PRODUCT:
      return { ...state, productFormValues: action.payload[0], selectedUid: action.payload[1] };
    default:
      return state;
  }
};
