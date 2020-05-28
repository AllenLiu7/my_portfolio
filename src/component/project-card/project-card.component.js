import React from 'react';
import './project-card.styles.scss';
import image from '../../assets/images/Snipaste_2020-05-27_17-55-27.png';

export default function ProjectCard() {
  return (
    <div className='card__container'>
      <div class='hovereffect'>
        <img class='img-responsive' src={image} alt='' />
        <div class='overlay'>
          <h2>Effect 12</h2>
          <p>
            <a href='#'>LINK HERE</a>
          </p>
        </div>
      </div>
    </div>
  );
}
