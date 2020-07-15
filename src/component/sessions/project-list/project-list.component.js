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
        github:
          'https://github.com/AllenLiu7/React-Passport-Authentication-Heroku',
        liveDemo: 'https://lit-dawn-27957.herokuapp.com/',
        id: 1,
        tag: ['react'],
      },
      {
        title: 'Online Cloth Shop',
        imageUrl: 'assets/images/cloth-shop.png',
        github: 'https://github.com/AllenLiu7/A-cloth-online-shop',
        liveDemo: 'https://cloth-ecommerce-allenliu.netlify.app/',
        id: 2,
        tag: ['react', 'nodejs'],
      },
      {
        title: 'Book Manager',
        imageUrl: 'assets/images/book-manager.png',
        github:
          'https://github.com/AllenLiu7/Library-Manager-TechDegree-Project-10',
        liveDemo: '',
        id: 3,
        tag: [''],
      },
      {
        title: 'Online Coffee Shop',
        imageUrl: 'assets/images/coffee-shop.png',
        github: 'https://github.com/AllenLiu7/ecommerce__coffeeshop--gatsby',
        liveDemo: 'https://coffee-shop-allenliu.netlify.app/',
        id: 4,
        tag: ['react'],
      },
      {
        title: 'React Flickr Gallery',
        imageUrl: 'assets/images/react-gallery.jpg',
        github:
          'https://github.com/AllenLiu7/Image-Gallery-TechDegree-Project-9',
        liveDemo: 'https://react-gallery-allenliu.netlify.app/',
        id: 4,
        tag: ['react'],
      },
      {
        title: 'Travel Agent Website',
        imageUrl: 'assets/images/travel-agent.png',
        github:
          'https://github.com/AllenLiu7/travel_agent_website--css_practice',
        liveDemo: 'https://travel-agent-allenliu.netlify.app/',
        id: 5,
        tag: ['react', 'nodejs'],
      },
      {
        title: 'Course Rating API',
        imageUrl: 'assets/images/course-rating-api.png',
        github:
          'https://github.com/AllenLiu7/Course-rating-API-TechDegree-Project-11',
        liveDemo: '',
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
              <ProjectCard key={id} {...otherProjectProps} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
