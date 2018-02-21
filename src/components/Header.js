import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="head">
      <h1 className="title"><span style={{ color: '#ffdb4d' }}>honey</span>badger editing</h1>
      <div className="links-div">
        <Link to="/" className="links">Home</Link> |
        <Link to="/about" className="links">About</Link> |
        <Link to="/reviews" className="links">Reviews</Link> |
        <Link to="#" className="links">Link 4</Link>
      </div>
    </div>
  );
}

export default Header;
