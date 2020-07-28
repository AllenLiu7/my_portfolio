import React from 'react';
import {
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
  FaMedium,
  FaTwitterSquare,
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
    id: 3,
    icon: <FaMedium className='social-icon'></FaMedium>,
    url: 'https://medium.com/@allen6qi',
  },
  {
    id: 4,
    icon: <FaInstagramSquare className='social-icon'></FaInstagramSquare>,
    url: 'https://www.instagram.com/kei_l_/',
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className='social-link'>
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
