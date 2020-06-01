import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/icon/icon-others.json';

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
      <div>
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
    );
  }
}
