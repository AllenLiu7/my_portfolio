import React from 'react';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import './typist.styles.scss';

export default function MyTypist() {
  return (
    <>
      <Typist
        className='MyTypist'
        startDelay={1500}
        cursor={{ show: true, hideWhenDone: true }}
      >
        <span className='first'>Hi, I am Allen Liu.</span>
      </Typist>
      <div className='fade-content'>
        <Fade delay={4200}>
          <br />
          <span>I am a self-taught full stack web developer.</span>
        </Fade>
      </div>
    </>
  );
}
