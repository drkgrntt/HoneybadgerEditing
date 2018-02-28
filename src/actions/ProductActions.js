import firebase from 'firebase';
import { reset } from 'redux-form';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT
} from './types';

export const saveProduct = ({ service, price, note }) => {
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

export const deleteProduct = ({ uid }) => {
  return (dispatch) => {
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      firebase.database().ref(`/products/${uid}`)
        .remove()
        .then(() => {
          dispatch(fetchProducts());
      });
    }
  };
};

export const fetchProduct = ({ uid }) => {
  return (dispatch) => {
    firebase.database().ref(`/products/${uid}`)
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_PRODUCT, payload: [snapshot.val(), uid] });
    });
  };
};

export const updateProduct = ({ service, price, note }, uid) => {
  return (dispatch) => {
    firebase.database().ref(`/products/${uid}`)
      .update({ service, price, note })
      .then(() => {
        dispatch(fetchProducts());
      })
      .then(() => {
        reset('ProductForm')
    });
  };
};
