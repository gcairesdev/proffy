import React from 'react';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing = () => {
  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logo} alt='Logo Proffy'/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landing} alt='Plataforma de estudos' className='hero-image'/>

        <div className='buttons-container'>
          <a href='' className='give-classes'>
            <img src={giveClassesIcon} alt='Ícone de dar aula'/>
            Dar aula
          </a>
          <a href='' className='study'>
            <img src={studyIcon} alt='Ícone de estudo'/>
            Estudar
          </a>
        </div>
        <span className='total-connections'>
          Total de 200 conexões já realizadas
          <img src={purpleHeart} alt='Coração roxo' />
        </span>
      </div>
    </div>
  );
};

export default Landing;
