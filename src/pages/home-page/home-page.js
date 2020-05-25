import React from 'react';
import Layout from '../../component/layout/layout.component';
import Typist from 'react-typist';
import './home-page.scss';
import BIRDS from 'vanta/dist/vanta.birds.min';

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
      backgroundColor: 0xf9f9f9,
      birdSize: 2.8,
      wingSpan: 27.0,
      quantity: 1.0,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <Layout>
        <div className='container' ref={this.vantaRef}>
          <Typist
            className='MyTypist1'
            startDelay={1500}
            cursor={{ show: true }}
          >
            <span className='first'>Hi, I am Allen liu.</span>
            <Typist.Backspace count={4} delay={1000} />
            <span>Liu.🤘</span>
            <Typist.Delay ms={1250} />
            <br />
            <span>I am a self taught web developer.</span>
          </Typist>
        </div>
      </Layout>
    );
  }
}

export default Homepage;
