import firebase from 'firebase';
import { reset } from 'redux-form';
import {
  SAVE_BLOG_POST,
  FETCH_BLOG_POSTS,
  FETCH_BLOG_POST,
  UNFETCH_BLOG_POST
} from './types';

export const saveBlogPost = ({ title, content }, history) => {
  return (dispatch) => {
    history.push('/blog');
    firebase.database().ref('/blogs')
      .push({ title, content })
      .then(() => {
        dispatch({ type: SAVE_BLOG_POST });
      });    
  };
};

export const fetchBlogPosts = () => {
  return (dispatch) => {
    firebase.database().ref('/blogs')
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_BLOG_POSTS, payload: snapshot.val() });
    });
  };
};

export const deleteBlogPost = (uid, history) => {
  return (dispatch) => {
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      history.push('/blog');
      firebase.database().ref(`/blogs/${uid}`)
        .remove()
        .then(() => {
          dispatch(fetchBlogPosts);
      });
    }
  };
};

export const fetchBlogPost = (uid) => {
  return (dispatch) => {
    firebase.database().ref(`/blogs/${uid}`)
      .on('value', (snapshot) => {
        dispatch({ type: FETCH_BLOG_POST, payload: [snapshot.val(), uid] });
    });
  };
};

export const updateBlogPost = ({ title, content }, uid, history) => {
  return (dispatch) => {
    history.push(`/blog/${uid}`)
    firebase.database().ref(`/blogs/${uid}`)
      .update({ title, content })
      .then(() => {
        reset('BlogPostForm');
    });
  };
};

export const unfetchBlogPost = () => {
  return (dispatch) => {
    dispatch({ type: UNFETCH_BLOG_POST });
  };
};
