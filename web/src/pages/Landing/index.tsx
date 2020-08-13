import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing = () => {
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then(res => {
      const { total } = res.data;

      setConnections(total);
    })
  }, []);

  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logo} alt='Logo Proffy'/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landing} alt='Plataforma de estudos' className='hero-image'/>

        <div className='buttons-container'>
          <Link to='/give-classes' className='give-classes'>
            <img src={giveClassesIcon} alt='Ícone de dar aula'/>
            Dar aula
          </Link>
          <Link to='/study' className='study'>
            <img src={studyIcon} alt='Ícone de estudo'/>
            Estudar
          </Link>
        </div>
        <span className='total-connections'>
          Total de {connections} conexões já realizadas
          <img src={purpleHeart} alt='Coração roxo' />
        </span>
      </div>
    </div>
  );
};

export default Landing;
