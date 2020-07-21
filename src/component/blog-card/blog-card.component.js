import React from 'react';
import './blog-card.styles.scss';
function BlogCard({ title, imageUrl, link, description }) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <div className='blog-card'>
        <img
          src={require('../../' + imageUrl)}
          alt='img'
          className='blog-card__image'
        />
        <div className='blog-card__body'>
          <h2 className='blog-card__title'>{title}</h2>
          <p className='blog-card__content'>{description}</p>
        </div>
      </div>
    </a>
  );
}

export default BlogCard;
