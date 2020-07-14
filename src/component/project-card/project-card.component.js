import React, { Component } from 'react';
import './project-card.styles.scss';

class ProjectCard extends Component {
  render() {
    const { title, imageUrl } = this.props;

    return (
      <div className='project-card'>
        <img
          src={require('../../' + imageUrl)}
          alt='img'
          className='project-card__image'
        />
        <div className='project-card__body'>
          <h2 className='project-card__title'>{title}</h2>
          <p className='project-card__content'>
            This is an autherization system build by React, Redux-Saga, MongoDB
            and PassportJS{' '}
          </p>
        </div>
        <div className='project-card__button-group'>
          <a href='#popup' className='project-card__button'>
            Detail
          </a>
          <a href='#popup' className='project-card__button'>
            GitHub
          </a>
          <a href='#popup' className='project-card__button'>
            Live Demo
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
