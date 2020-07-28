import React from 'react';

const SideLink = (props) => {
  const { styleClass, toggleSidebar } = props;
  const links = [
    {
      id: 1,
      text: 'technology',
      url: 'technology',
    },
    {
      id: 2,
      text: 'projects',
      url: 'projects',
    },
    {
      id: 3,
      text: 'blog',
      url: 'blog',
    },
    {
      id: 4,
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
            <a href={`#${link.url}`}>{link.text}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SideLink;
