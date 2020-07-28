import React from 'react';
import SideLink from '../../constants/nav-bar-links/nab-bar-links.component';
import './nav-sidebar.styles.scss';
import SocialLinks from '../../constants/social-links/social-links.component';
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
        <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} />
      </div>
    </aside>
  );
};

export default Sidebar;
