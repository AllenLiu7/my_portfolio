import React from 'react';
import './tech-card.style.scss';

export default function TechCard({ content: { title, tech } }) {
  return (
    <div className='tech-card__container'>
      <div className='tech-card__icon'></div>
      <h1 className='tech-card__title hvr-bounce-to-right'>{title}</h1>
      <div className='tech-card__text'>
        {tech.map((tech) => {
          return <p className='tech-text hvr-buzz-out'>{tech}</p>;
        })}
      </div>
    </div>
  );
}
