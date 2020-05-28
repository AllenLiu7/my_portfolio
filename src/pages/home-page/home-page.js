import React from 'react';
import Layout from '../../component/layout/layout.component';
import ProjectList from '../../component/project-list/project-list.component';
import MyTypist from '../../component/react-typist/typist.component';
import Scrolldown from '../../component/scrolldown-icon/scrolldown-icon.component';
import BIRDS from 'vanta/dist/vanta.birds.min';

import './home-page.scss';

class Homepage extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xffffff,
      color1: 0xfe3f42,
      color2: 0xfcb8bd,
      colorMode: 'lerpGradient',
      birdSize: 1.7,
      wingSpan: 27.0,
      speedLimit: 6.0,
      separation: 26.0,
      alignment: 69.0,
      cohesion: 49.0,
      quantity: 2.0,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <Layout>
        <div className='landing' ref={this.vantaRef}>
          <MyTypist />
          <div className='scroll-down'>
            <Scrolldown />
          </div>
        </div>
        <div className='project-list'>
          <ProjectList />
        </div>
      </Layout>
    );
  }
}

export default Homepage;
