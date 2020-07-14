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
    const { title, imageUrl } = this.props;
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
            <p className='project-card__content'>
              This is an autherization system build by React, Redux-Saga,
              MongoDB and PassportJS{' '}
            </p>
          </div>
          <div className='project-card__button-group'>
            <a className='project-card__button' onClick={this.onOpenModal}>
              Detail
            </a>
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
            <a className='project-card__button'>GitHub</a>
            <a className='project-card__button'>Live Demo</a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProjectCard;
