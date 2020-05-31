import React from 'react';
import './tech-card.style.scss';
import '../../assets/icon/iconmonstr-wrench-2-240.png';

export default function TechCard({ title, tech, iconUrl }) {
  return (
    <div class='tech-card__container'>
      <div class='tech-card__card'>
        <a href='hottub'>
          <div class='card--display'>
            <img src={require('../../' + `${iconUrl}`)} alt='' />
            <h2>{title}</h2>
          </div>
          <div class='card--hover'>
            {tech.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </a>
        <div class='card--border'></div>
      </div>
    </div>
  );
}
