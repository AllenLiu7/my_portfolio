import React, { Component } from 'react';
import ProjectCard from '../../project-card/project-card.component';
import data from '../../../assets/data/projects'
import Fade from 'react-reveal/Fade';
import './project-list.styles.scss';

export default class ProjectList extends Component {
  render() {
    const projects = data
    
    return (
      <div className='project-session' name='projects' id='projects'>
        <div className='project-list'>
          <Fade left delay={200}>
            <h1 className='project-list__title'>PROJECTS</h1>
          </Fade>
          <Fade right>
            <div className='project-list__title-bar'></div>
          </Fade>

          <div className='project-list__card-container'>
            {projects.map(({ id, ...otherProjectProps }) => (
              <div key={id}>
                <Fade>
                  <ProjectCard {...otherProjectProps} />
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
