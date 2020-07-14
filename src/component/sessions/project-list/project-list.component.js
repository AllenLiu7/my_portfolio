import React, { Component } from 'react';
import ProjectCard from '../../project-card/project-card.component';
import Fade from 'react-reveal/Fade';
import './project-list.styles.scss';

export default class ProjectList extends Component {
  state = {
    projects: [
      {
        title: 'React Passport Authorization system',
        imageUrl: 'assets/images/react-passport.png',
        id: 1,
        tag: ['react'],
      },
      {
        title: 'Online Cloth Shop',
        imageUrl: 'assets/images/cloth-shop.png',
        id: 2,
        tag: ['react', 'nodejs'],
      },
      {
        title: 'Book Manager',
        imageUrl: 'assets/images/book-manager.png',
        id: 3,
        tag: [''],
      },
      {
        title: 'Online Coffee Shop',
        imageUrl: 'assets/images/coffee-shop.png',
        id: 4,
        tag: ['react'],
      },
      {
        title: 'Travel Agent Website',
        imageUrl: 'assets/images/travel-agent.png',
        id: 5,
        tag: ['react', 'nodejs'],
      },
      {
        title: 'Course Rating API',
        imageUrl: 'assets/images/course-rating-api.png',
        id: 6,
        tag: ['react', 'jquerry'],
      },
    ],
    filteredProjects: [],
  };

  render() {
    const projects = this.state.projects;

    return (
      <div className='project-session'>
        <div className='project-list'>
          <Fade left delay={200}>
            <h1 className='project-list__title'>PROJECTS</h1>
          </Fade>
          <Fade right>
            <div className='project-list__title-bar'></div>
          </Fade>

          <div className='project-list__card-container'>
            {projects.map(({ id, ...otherProjectProps }) => (
              <Fade delay={300}>
                <ProjectCard key={id} {...otherProjectProps} />
              </Fade>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
