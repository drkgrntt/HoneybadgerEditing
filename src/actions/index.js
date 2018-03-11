import firebase from 'firebase';
import { FETCH_ABOUT } from './types';

export const fetchAbout = () => {
  return (dispatch) => {
    firebase.database().ref('/about')
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_ABOUT, payload: snapshot.val() });
    });
  };
};

export const updateAbout = ({ about }, history) => {
  return (dispatch) => {
    history.push('/about');
    firebase.database().ref('/about')
      .update({ about })
      .then(() => {
        dispatch(fetchAbout());
    });
  };
};

export * from './AuthActions';
export * from './ReviewActions';
export * from './ProductActions';
export * from './MessageActions';
export * from './BlogActions';
export * from './EditedWorkActions';
