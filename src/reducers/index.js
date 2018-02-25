import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ReviewReducer from './ReviewReducer';
import ProductReducer from './ProductReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  form: formReducer,
  Auth: AuthReducer,
  Reviews: ReviewReducer,
  Products: ProductReducer
});
