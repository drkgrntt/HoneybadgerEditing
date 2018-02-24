import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderAdminContent() {
    console.log(this.props.Auth);
    if (this.props.Auth.user.isAdmin) {
      return (
        <div>
          Admin view enabled
        </div>
      );
    }
  }

  render() {
    return (
      <div className="head">
        {this.renderAdminContent()}
        <h1 className="title"><span style={{ color: '#ffdb4d' }}>honey</span>badger editing</h1>
        <div className="links-div">
          <a href="/" className="links">Home</a> |
          <Link to="/about" className="links">About</Link> |
          <Link to="/reviews" className="links">Reviews</Link> |
          <Link to="#" className="links">Link 4</Link>
        </div>
      </div>
    );    
  }
}

const mapStateToProps = ({ Auth }) => {
  return { Auth };
};

export default connect(mapStateToProps, null)(Header);
