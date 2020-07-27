import React from 'react';
import { Link } from 'react-scroll';

const NavLink = (props) => {
  const { styleClass, toggleSidebar } = props;
  const links = [
    {
      id: 1,
      text: 'home',
      url: 'home',
    },
    {
      id: 2,
      text: 'technology',
      url: 'technology',
    },
    {
      id: 3,
      text: 'projects',
      url: 'projects',
    },
    {
      id: 4,
      text: 'blog',
      url: 'blog',
    },
    {
      id: 5,
      text: 'contact',
      url: 'contact',
    },
  ];
  return (
    <ul
      className={`page-links ${styleClass ? styleClass : ''}`}
      onClick={toggleSidebar}
    >
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link
              activeClass='active'
              to={link.url}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLink;