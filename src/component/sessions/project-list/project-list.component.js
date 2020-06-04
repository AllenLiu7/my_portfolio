import React, { Component } from 'react';
import ProjectCard from '../../project-card/project-card.component';
import Fade from 'react-reveal/Fade';
import './project-list.styles.scss';

export default class ProjectList extends Component {
  state = {
    projects: [
      {
        title: 'Online Cloth Shop',
        imageUrl: 'assets/images/Snipaste_2020-05-27_17-55-27.png',
        id: 1,
        tag: ['react'],
      },
      {
        title: 'Online Cloth Shop',
        imageUrl: 'assets/images/Snipaste_2020-05-27_17-55-27.png',
        id: 2,
        tag: ['react', 'nodejs'],
      },
      {
        title: 'Online Cloth Shop',
        imageUrl: 'assets/images/Snipaste_2020-05-27_17-55-27.png',
        id: 3,
        tag: [''],
      },
      {
        title: 'Online Cloth Shop',
        imageUrl: 'assets/images/Snipaste_2020-05-27_17-55-27.png',
        id: 4,
        tag: ['react'],
      },
      {
        title: 'Online Cloth Shop',
        imageUrl: 'assets/images/Snipaste_2020-05-27_17-55-27.png',
        id: 5,
        tag: ['react', 'nodejs'],
      },
      {
        title: 'Online Cloth Shop',
        imageUrl: 'assets/images/Snipaste_2020-05-27_17-55-27.png',
        id: 6,
        tag: ['react', 'jquerry'],
      },
    ],
    filteredProjects: [],
  };

  handleClick = (e) => {
    console.log(e.target.innerHTML.toLowerCase());
    let filtered = this.state.projects.filter((project) =>
      project.tag.includes(e.target.innerHTML.toLowerCase())
    );
    this.setState({ filteredProjects: filtered });
  };

  render() {
    let showProjects;

    if (this.state.filteredProjects.length === 0) {
      showProjects = this.state.projects;
    } else {
      showProjects = this.state.filteredProjects;
    }

    return (
      <div className='project-session'>
        <div className='project-list'>
          <Fade left delay={200}>
            <h1 className='project-list__title'>Projects</h1>
          </Fade>
          <Fade right>
            <div className='project-list__title-bar'></div>
          </Fade>

          <div className='project-list__card-container'>
            {showProjects.map(({ id, ...otherProjectProps }) => (
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
