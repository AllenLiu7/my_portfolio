import React from 'react';
import './header.styles.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Router>
      <div className='header'>
        <div className='options'>
          <Link className='option' to='/shop'>
            About
          </Link>
          <Link className='option' to='/shop'>
            Blog
          </Link>
          <Link className='option' to='/shop'>
            Contact
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default Header;
