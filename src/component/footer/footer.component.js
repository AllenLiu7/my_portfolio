import React from 'react';
import SocialLinks from '../social-links/social-links.component';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <SocialLinks styleClass='footer-links'></SocialLinks>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> Allen Liu </span> all rights reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
