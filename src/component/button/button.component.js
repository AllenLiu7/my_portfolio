import React, { Children } from 'react';
import './button.styles.scss';

export default function Button({ children }) {
  return <button className='btn btn--orange btn--animated'>{children}</button>;
}
