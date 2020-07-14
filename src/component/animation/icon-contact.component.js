import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/icon/icon-contact.json';
import './contact-icon.styles.scss';

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
      <div className='contact-icon'>
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}
