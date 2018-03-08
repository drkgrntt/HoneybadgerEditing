import firebase from 'firebase';
import { reset } from 'redux-form';
import {
  FETCH_EDITED_WORKS,
  FETCH_EDITED_WORK,
  CREATE_EDITED_WORK
} from './types';

export const saveEditedWork = ({ title, author, image, description, amazon }, history) => {
  return (dispatch) => {
    history.push('/');
    firebase.database().ref('/editedWorks')
      .push({ title, author, image, description, amazon })
      .then(() => {
        dispatch({ type: CREATE_EDITED_WORK });
    });
  };
};

export const fetchEditedWorks = () => {
  return (dispatch) => {
    firebase.database().ref('/editedWorks')
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_EDITED_WORKS, payload: snapshot.val() });
    });
  };
};

export const deleteEditedWork = ({ uid }) => {
  return (dispatch) => {
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      firebase.database().ref(`/editedWorks/${uid}`)
        .remove()
        .then(() => {
          dispatch(fetchEditedWorks());
      });
    }
  };
};

export const fetchEditedWork = ({ uid }) => {
  return (dispatch) => {
    firebase.database().ref(`/editedWorks/${uid}`)
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_EDITED_WORK, payload: [snapshot.val(), uid] });
    });
  };
};

export const updateEditedWork = ({ title, author, image, description, amazon }, uid, history) => {
  return (dispatch) => {
    history.push('/')
    firebase.database().ref(`/editedWorks/${uid}`)
      .update({ title, author, image, description, amazon })
      .then(() => {
        dispatch(fetchEditedWorks());
    });
  };
};
