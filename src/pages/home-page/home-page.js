import React from 'react';
import Layout from '../../component/layout/layout.component';
import ProjectList from '../../component/sessions/project-list/project-list.component';
import TechList from '../../component/sessions/tech-list/tech-list.component';
import MyTypist from '../../component/react-typist/typist.component';

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
      color1: 0x707af2,
      color2: 0x79b9ef,
      colorMode: 'lerpGradient',
      birdSize: 2.6,
      wingSpan: 26.0,
      speedLimit: 7.0,
      separation: 50.0,
      alignment: 53.0,
      cohesion: 53.0,
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
        </div>
        <div className='tech-list'>
          <TechList />
        </div>
        <div className='project-list'>
          <ProjectList />
        </div>
      </Layout>
    );
  }
}

export default Homepage;
