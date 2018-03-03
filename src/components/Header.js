import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { unfetchBlogPost, logoutUser } from '../actions';

class Header extends Component {
  onLogoutClick() {
    const { logoutUser, history } = this.props;

    logoutUser(history);
  }

  onDashboardClick() {
    this.props.unfetchBlogPost();
  }

  renderAdminContent() {
    if (this.props.Auth.user.isAdmin) {
      return (
        <div className="admin-links-div">
          <p className="links"><em>Admin view enabled</em></p> | 
          <Link 
            onClick={this.onDashboardClick.bind(this)} 
            className="links" 
            to="/admin/dashboard"
          >
            Dashboard
          </Link>
        </div>
      );
    }
  }

  renderLoggedInContent() {
    const { user } = this.props.Auth;

    if (user) {
      return (
        <div className="logged-links-div">
          <p className="links"><em>Logged in as {user.username}</em></p> | 
          <a 
            href="/" 
            className="links" 
            onClick={this.onLogoutClick.bind(this)}
          >
            Logout
          </a>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="head">
        {this.renderAdminContent()}
        <div className="links-div">
          <a href="/" className="links">Home</a> |
          <Link to="/about" className="links">About</Link> |
          <Link to="/reviews" className="links">Reviews</Link> |
          <Link to="/blog" className="links">Blog</Link>
        </div>
        {this.renderLoggedInContent()}
      </div>
    );    
  }
}

const mapStateToProps = ({ Auth }) => {
  return { Auth };
};

export default connect(mapStateToProps, { unfetchBlogPost, logoutUser })(withRouter(Header));
