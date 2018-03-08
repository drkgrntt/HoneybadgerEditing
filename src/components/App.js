import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import AllEditedWorks from './AllEditedWorks';
import About from './About';
import Review from './Review';
import Blog from './Blog';
import AllBlogs from './AllBlogs';
import ShowBlog from './ShowBlog';
import Register from './Register';
import Login from './Login';
import Derek from './Derek';

import Dashboard from './admin/Dashboard';

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

    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/works" component={AllEditedWorks} />
            <Route exact path="/about" component={About} />
            <Route exact path="/reviews" component={Review} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:uid" component={ShowBlog} />
            <Route exact path="/blogs/all" component={AllBlogs} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* Admin Routes */}
            <Route exact path="/admin/dashboard" component={Dashboard} />

            <Derek />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
