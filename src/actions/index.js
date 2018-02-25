import firebase from 'firebase';
import { reset } from 'redux-form';
import {
  FETCH_REVIEWS,
  FETCH_PRODUCTS
} from './types';

export * from './AuthActions';

export const saveMessage = ({ name, email, content }) => {
  return (dispatch) => {
    alert('Thank you for reaching out! I\'ll be in touch soon!');
    firebase.database().ref('/messages')
      .push({ name, email, content })
      .then(() => {
        dispatch(reset('ContactForm'));
    });
  };
};

export const saveProduct = ({ service, price, note}) => {
  return (dispatch) => {
    firebase.database().ref('/products')
      .push({ service, price, note })
      .then(() => {
        dispatch(reset('ProductForm'));
    });
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    firebase.database().ref('/products')
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_PRODUCTS, payload: snapshot.val() });
    });
  };
};

export const saveReview = ({ title, stars, content }) => {
  return (dispatch) => {
    alert('Thank you for the review!');
    firebase.database().ref('/reviews')
      .push({ title, stars, content })
      .then(() => {
        dispatch(reset('ReviewForm'));
    });
  };
};

export const fetchReviews = () => {
  return (dispatch) => {
    firebase.database().ref('/reviews')
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_REVIEWS, payload: snapshot.val() });
    });
  };
};
