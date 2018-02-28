import firebase from 'firebase';
import { reset } from 'redux-form';
import { 
  FETCH_MESSAGES 
} from './types';

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

export const fetchMessages = () => {
  return (dispatch) => {
    firebase.database().ref('/messages')
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_MESSAGES, payload: snapshot.val() });
    });
  };
};

export const deleteMessage = ({ uid }) => {
  return (dispatch) => {
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      firebase.database().ref(`/messages/${uid}`)
        .remove()
        .then(() => {
          dispatch(fetchMessages());
      });
    }
  };
};
