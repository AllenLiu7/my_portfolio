import React from 'react';
import TechCard from '../../tech-card/tech-card.component';
import IconFrontend from '../../animation/icon-frontend.component';
import IconBackend from '../../animation/icon-backend.component';
import IconOthers from '../../animation/icon-others.component';
import Fade from 'react-reveal/Fade';
import './tech-list.styles.scss';

export default function TechList() {
  const techData = {
    frontend: {
      id: 1,
      title: 'Frontend',
      tech: [
        'HTML',
        'CSS',
        'SASS',
        'Bootstrap',
        'Javascript',
        'jQuery',
        'Pug',
        'React',
        'React Native',
        'Redux',
        'Redux Thunk',
        'Redux Saga',
        'Gatsbyjs',
        '. . .',
      ],
      iconUrl: 'assets/icon/iconmonstr-code-2-240.png',
    },
    backend: {
      id: 2,
      title: 'Backend',
      tech: [
        'nodejs',
        'Express',
        'Mongodb',
        ' Mongoose',
        'SQL',
        'Sequalize',
        'PassportJs',
        'Graphql',
        'Firebase',
        'Contentful',
        '. . .',
      ],
      iconUrl: 'assets/icon/iconmonstr-server-4-240.png',
    },
    others: {
      id: 3,
      title: 'Others',
      tech: [
        'Vscode',
        'npm',
        'git',
        'Aglie',
        'Figma',
        'Notion',
        'codepen',
        'codesandbox',
        '. . .',
      ],
      iconUrl: 'assets/icon/iconmonstr-wrench-2-240.png',
    },
  };
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
            <TechCard content={techData.frontend} />
          </div>
          <div className='tech-list__card'>
            <div className='tech-list__card-icon'>
              <IconBackend />
            </div>
            <TechCard content={techData.backend} />
          </div>
          <div className='tech-list__card'>
            <div className='tech-list__card-icon'>
              <IconOthers />
            </div>
            <TechCard content={techData.others} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
