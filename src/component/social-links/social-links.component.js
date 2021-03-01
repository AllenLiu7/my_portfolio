import React from 'react';
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaMedium,
} from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaLinkedin className='social-icon'></FaLinkedin>,
    url: 'https://www.linkedin.com/in/workwithallenliu/',
  },
  {
    id: 2,
    icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
    url: 'https://github.com/AllenLiu7',
  },
  {
    id: 4,
    icon: <FaMedium className='social-icon'></FaMedium>,
    url: 'https://medium.com/@allen6qi',
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className='social-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>
  );
};
