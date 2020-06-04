import React, { Component } from 'react';
import Button from '../button/button.component';
import Fade from 'react-reveal/Fade';
import './form.styles.scss';
import MyPhoto from '../../assets/images/IMG_20181229_104653.jpg';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    text: '',
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
          <div className='contact__image'>
            <img src={MyPhoto} alt='me' />
          </div>
          <div className='contact__form'>
            <form action='' className='form'>
              <h1>Contact Me</h1>
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
                  name
                </label>
              </div>
              <div className='form__group'>
                <input
                  type='text'
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
                  email
                </label>
              </div>
              <div className='form__group'>
                <textarea
                  type='text'
                  className='form__message'
                  row='6'
                  name='text'
                  value={this.state.text}
                  onChange={this.handleChange}
                />
                <label
                  className={`${
                    this.state.text.length ? 'shrink-text' : ''
                  } form__label`}
                >
                  message
                </label>
              </div>
              <div className='button'>
                <Button />
              </div>
            </form>
          </div>
        </div>
      </Fade>
    );
  }
}
