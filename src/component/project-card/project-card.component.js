import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
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
    const { title, imageUrl, github, liveDemo } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <Fade>
          <div className='project-card'>
            <img
              src={require('../../' + imageUrl)}
              alt='img'
              className='project-card__image'
            />
            <div className='project-card__body'>
              <h2 className='project-card__title'>{title}</h2>
              <p className='project-card__content'>
                This is an autherization system build by React, Redux-Saga,
                MongoDB and PassportJS{' '}
              </p>
            </div>
            <div className='project-card__button-group'>
              <button
                className='project-card__button'
                onClick={this.onOpenModal}
              >
                Detail
              </button>
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
                  <h2 className='project-card__modal-title'>
                    React Passport Authorization system
                  </h2>
                  <p className='project-card__modal-content'>
                    This is an autherization system build by React, Redux-Saga,
                    MongoDB and PassportJS
                  </p>
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
        </Fade>
      </Fragment>
    );
  }
}

export default ProjectCard;
