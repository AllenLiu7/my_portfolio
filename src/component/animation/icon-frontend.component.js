import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/icon/icon-frontend.json';
import './tech-icon.styles.scss';

export default class IconFrontend extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div className='tech-icon'>
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}
