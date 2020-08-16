import React from 'react';

import Whatsapp from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';

interface TeacherItemProps {
  id: number;
  name: string;
  image: string;
  subject: string;
  bio: string;
  price: number;
  whatsapp: string;
}

const TeacherItem:React.FC<TeacherItemProps> = ({
  id,
  name,
  image,
  subject,
  bio,
  price,
  whatsapp
}) => {
  const createNewConnecion = () => {
    api.post('/connections', {user_id: id});
  }

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

        <a
          href={`https://wa.me/${whatsapp}`}
          target='_blank'
          onClick={createNewConnecion}
        >
          <button type='button'>
            <img src={Whatsapp} alt="WhatsApp"/>
            Entrar em contato
          </button>
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
