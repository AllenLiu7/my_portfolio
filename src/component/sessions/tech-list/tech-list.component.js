import React from 'react';
import TechCard from '../../tech-card/tech-card.component';
import IconFrontend from '../../animation/icon-frontend.component';
import IconBackend from '../../animation/icon-backend.component';
import IconOthers from '../../animation/icon-others.component';
import Fade from 'react-reveal/Fade';
import techList from '../../../assets/data/tech_list'
import './tech-list.styles.scss';

export default function TechList() {

  return (
    <div className='tech-list__session' name='technology' id='technology'>
      <div className='tech-list__title'>
        <Fade left delay={200}>
          <h1 className='tech-list__title-text'>TECHNOLOGY</h1>
        </Fade>
        <Fade right>
          <div className='tech-list__title-bar'></div>
        </Fade>
      </div>
      <Fade delay={500}>
        <div className='tech-list__container'>
          <div className='tech-list__card'>
            <div className='tech-list__card-icon'>
              <IconFrontend />
            </div>
            <TechCard content={techList.frontend} />
          </div>
          <div className='tech-list__card'>
            <div className='tech-list__card-icon'>
              <IconBackend />
            </div>
            <TechCard content={techList.backend} />
          </div>
          <div className='tech-list__card'>
            <div className='tech-list__card-icon'>
              <IconOthers />
            </div>
            <TechCard content={techList.others} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
