import React from 'react';
import Typist from 'react-typist';
import './typist.styles.scss';

export default function MyTypist() {
  return (
    <>
      <Typist
        className='MyTypist'
        startDelay={1500}
        cursor={{ show: true, hideWhenDone: true }}
      >
        <span className='first'>Hi, I am Allen liu.</span>
        <Typist.Backspace count={4} delay={1000} />
        <span>Liu.🤘</span>
        <Typist.Delay ms={1250} />
        <br />
        <span>I am a self taught web developer.</span>
      </Typist>
    </>
  );
}
