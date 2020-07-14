import React from 'react';
import MyTypist from '../../react-typist/typist.component';
import './landing.styles.scss';

export default function Landing() {
  return (
    <div className='landing-session'>
      <div className='typist'>
        <MyTypist />
      </div>
    </div>
  );
}
