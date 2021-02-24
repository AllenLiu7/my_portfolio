import React, { Component, Fragment } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './project-card.styles.scss';

class ProjectCard extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { title, imageUrl, github, liveDemo, description, tech } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <div className='project-card'>
          <img
            src={require('../../' + imageUrl)}
            alt='img'
            className='project-card__image'
          />
          <div className='project-card__body'>
            <h2 className='project-card__title'>{title}</h2>
            <p className='project-card__content'>{tech}</p>
          </div>
          <div className='project-card__button-group'>
            <span className='project-card__button' onClick={this.onOpenModal}>
              Detail
            </span>
            <Modal
              open={open}
              onClose={this.onCloseModal}
              center
              classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
              }}
            >
              <div className='project-card__modal'>
                <div className='project-card__modal-image'></div>
                <div className='project-card__modal-body'>
                  <h2 className='project-card__modal-title'>{title}</h2>
                  <p className='project-card__modal-content'>{description}</p>
                </div>
              </div>
            </Modal>
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='project-card__button'
            >
              GitHub
            </a>
            {liveDemo ? (
              <a
                href={liveDemo}
                target='_blank'
                rel='noopener noreferrer'
                className='project-card__button'
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProjectCard;
