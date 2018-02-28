import firebase from 'firebase';
import { reset } from 'redux-form';
import {
  FETCH_REVIEWS,
  FETCH_REVIEW
} from './types';

export const saveReview = ({ name, title, stars, content }) => {
  return (dispatch) => {
    alert('Thank you for the review!');
    firebase.database().ref('/reviews')
      .push({ name, title, stars, content })
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

export const deleteReview = ({ uid }) => {
  return (dispatch) => {
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      firebase.database().ref(`/reviews/${uid}`)
        .remove()
        .then(() => {
          dispatch(fetchReviews());
      });
    }
  };
};

export const fetchReview = ({ uid }) => {
  return (dispatch) => {
    firebase.database().ref(`/reviews/${uid}`)
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_REVIEW, payload: [snapshot.val(), uid] });
    });
  };
};

export const updateReview = ({ name, title, stars, content }, uid) => {
  return (dispatch) => {
    firebase.database().ref(`/reviews/${uid}`)
      .update({ name, title, stars, content })
      .then(() => {
        dispatch(fetchReviews());
      })
      .then(() => {
        reset('ReviewForm');
    });
  };
};
