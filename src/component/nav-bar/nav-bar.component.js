import React from 'react';
import NavLink from '../nav-bar-links/nab-bar-links.component';

import { FaBars } from 'react-icons/fa';
import './nav-bar.styles.scss';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <button type='button' className='nav-btn' onClick={toggleSidebar}>
            <FaBars></FaBars>
          </button>
        </div>
        <NavLink styleClass='nav-links' />
      </div>
    </nav>
  );
};

export default Navbar;
