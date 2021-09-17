import React, { Component } from 'react';
import Button from '../button/button.component';

import Fade from 'react-reveal/Fade';
import './form.styles.scss';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    status: '',
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Fade>
        <div className='contact'>
          <form
            action={process.env.REACT_APP_FORMSPREE}
            method='POST'
            className='form'
            onSubmit={this.submitForm}
          >
            <h1 className='form__header'>Contact Me</h1>

            <div className='form__group'>
              <input
                type='text'
                className='form__input'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              />
              <label
                className={`${
                  this.state.name.length ? 'shrink' : ''
                } form__label`}
              >
                Name
              </label>
            </div>
            <div className='form__group'>
              <input
                type='email'
                className='form__input'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label
                className={`${
                  this.state.email.length ? 'shrink' : ''
                } form__label`}
              >
                Email
              </label>
            </div>
            <div className='form__group'>
              <textarea
                type='text'
                className='form__message'
                rows='10'
                name='message'
                value={this.state.text}
                onChange={this.handleChange}
              />
              <label
                className={`${
                  this.state.message.length ? 'shrink-text' : ''
                } form__label`}
              >
                Message
              </label>
            </div>
            <div className='form__button'>
              {this.state.status === 'SUCCESS' ? (
                <p className='submit-feedback'>Thanks!</p>
              ) : (
                <Button />
              )}
              {this.state.status === 'ERROR' && (
                <p className='submit-feedback'>Ooops! There was an error.</p>
              )}
            </div>
          </form>
        </div>
      </Fade>
    );
  }

  submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  };
}

// <div className='contact__image'>
// <img src={MyPhoto} alt='me' />
// </div>
