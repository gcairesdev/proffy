import React from 'react';

import Whatsapp from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

interface TeacherItemProps {
  name: string;
  image: string;
  subject: string;
  bio: string;
  price: number;
  whatsapp: string;
}

const TeacherItem:React.FC<TeacherItemProps> = ({
  name,
  image,
  subject,
  bio,
  price,
  whatsapp
}) => {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src={image}
          alt={name}
        />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>
        {bio}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {price}</strong>
        </p>

        <button type='button' title={whatsapp}>
          <img src={Whatsapp} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
