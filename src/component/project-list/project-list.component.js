import React, { Component } from 'react';
import ProjectCard from '../project-card/project-card.component';
import Fade from 'react-reveal/Fade';
import './project-list.styles.scss';

export default class ProjectList extends Component {
  render() {
    return (
      <div className='card-list'>
        <Fade>
          <h1 className='card-list__title'>Projects</h1>
        </Fade>
        <div className='card-list__container'>
          <Fade duration={3000}>
            <ProjectCard />
          </Fade>
          <Fade duration={3000}>
            <ProjectCard />
          </Fade>
          <Fade duration={3000}>
            <ProjectCard />
          </Fade>
          <Fade duration={3000}>
            <ProjectCard />
          </Fade>
          <Fade duration={3000}>
            <ProjectCard />
          </Fade>
          <Fade duration={3000}>
            <ProjectCard />
          </Fade>
          <Fade duration={3000}>
            <ProjectCard />
          </Fade>
        </div>
      </div>
    );
  }
}
