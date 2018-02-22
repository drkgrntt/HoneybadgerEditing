import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ReviewReducer from './ReviewReducer';

export default combineReducers({
  form: formReducer,
  Reviews: ReviewReducer
});
