import firebase from 'firebase';
import _ from 'lodash';
import {
  CHECK_USERNAME,
  REGISTER_USER,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  FETCH_USER
} from './types';

// AUTH ACTIONS
export const checkUsername = ({ username, email, password }, history) => {
  return (dispatch) => {
    dispatch({ type: CHECK_USERNAME });

    if (username === undefined) {
      const err = { message: 'You need to enter a username' };

      return loginUserFail(dispatch, err);
    }

    firebase.database().ref('people')
      .on('value', (snapshot) => {
        _.map(snapshot.val(), (user) => {
          if (username === user.username) {
            const err = { message: 'Username is taken. Please choose something else' };

            return loginUserFail(dispatch, err);
          }
        });

        return registerUser(username, email, password, history, dispatch);
      });
  };
};

const registerUser = (username, email, password, history, dispatch) => {
  dispatch({ type: REGISTER_USER });

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((currentUser) => {
      loginUserSuccess(dispatch, history, currentUser)
    })
    .then(() => {
      const { currentUser } = firebase.auth();

      firebase.database().ref('people')
        .push({ username, email, authUid: currentUser.uid, isAdmin: false })
        .then(() => {})
    })
    .catch((err) => loginUserFail(dispatch, err));
};

export const loginUser = ({ email, password }, history) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((currentUser) => loginUserSuccess(dispatch, history, currentUser))
      .catch((err) => loginUserFail(dispatch, err));        
  };
};

const loginUserSuccess = (dispatch, history, currentUser) => {
  firebase.database().ref('/people')
    .on('value', (snapshot) => {
      _.map(snapshot.val(), (user) => {
        if (user.authUid === currentUser.uid) {
          dispatch({ type: FETCH_USER, payload: user });
        }
      });
  });

  history.push('/blog');
};

const loginUserFail = (dispatch, err) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: err });    
};

export const logoutUser = (history) => {
  return (dispatch) => {
    history.push('/');
    dispatch({ type: LOGOUT_USER });

    firebase.auth().signOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        firebase.database().ref('/people')
          .on('value', (snapshot) => {
            _.map(snapshot.val(), (user) => {
              if (user.authUid === currentUser.uid) {
                dispatch({ type: FETCH_USER, payload: user });
              }
            });
        });
      }
    });
  };
};
