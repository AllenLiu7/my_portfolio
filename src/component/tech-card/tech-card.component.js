import React from 'react';
import './tech-card.style.scss';

export default function TechCard({ content: { title, tech } }) {
  return (
    <div className='tech-card__container'>
      <div className='tech-card__icon'></div>
      <h1 className='tech-card__title hvr-buzz-out'>{title}</h1>
      <div className='tech-card__content'>
        {tech.map((tech) => {
          return <p className=' hvr-bounce-to-right'>{tech}</p>;
        })}
      </div>
    </div>
  );
}
