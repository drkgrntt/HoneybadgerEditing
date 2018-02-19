import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDVZBsY3lLmI5B0fs04o4HduNgL17fSdM0",
      authDomain: "honeybadgerediting.firebaseapp.com",
      databaseURL: "https://honeybadgerediting.firebaseio.com",
      projectId: "honeybadgerediting",
      storageBucket: "honeybadgerediting.appspot.com",
      messagingSenderId: "878654028106"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
