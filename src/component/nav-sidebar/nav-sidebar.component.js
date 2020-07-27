import React from 'react';
import SideLink from '../side-bar-links/side-bar-links.component';
import './nav-sidebar.styles.scss';
//import SocialLinks from '../constants/socialLinks';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''} `}>
      <button className='close-btn' onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className='side-container'>
        <SideLink
          styleClass={`${isOpen ? 'sidebar-links' : ''}`}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
