import React from 'react';
import './project-card.styles.scss';

export default function ProjectCard({ imageUrl, title }) {
  return (
    <div className='card__container'>
      <div className='hovereffect'>
        <img
          className='img-responsive'
          src={require('../../' + imageUrl)}
          alt=''
        />
        <div className='overlay'>
          <h2>{title}</h2>
          <p>
            <a href='#'>LINK HERE</a>
          </p>
        </div>
      </div>
    </div>
  );
}
