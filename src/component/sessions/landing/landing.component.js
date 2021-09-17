import React from 'react';
import MyTypist from '../../react-typist/typist.component';
import './landing.styles.scss';

export default function Landing() {
  return (
    <div className='landing-session' name='home' id='home'>
      <div className='landing__typist'>
        <MyTypist />
      </div>
      <div className='landing__image-container'>
        <img
          src={require('../../../assets/images/landing-dog.jpg')}
          alt='pic'
        />
        <div className='landing__overlay'></div>
      </div>
    </div>
  );
}
