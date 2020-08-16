import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';
import Input from '../../components/Input';
import api from '../../services/api';

import './styles.css';

interface Teacher {
  id: number;
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
}

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [week_day, setWeekDay] = useState('');
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return(
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.' >
        <form id='search-teachers' onSubmit={searchTeachers}>
          <Select
            name='subject'
            label='Matéria'
            options={[
              {value: 'Matemátia', label: 'Matemátia'},
              {value: 'Física', label: 'Física'},
              {value: 'Química', label: 'Química'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'História', label: 'História'},
              {value: 'Filosofia', label: 'Filosofia'},
              {value: 'Sociologia', label: 'Sociologia'},
              {value: 'Português', label: 'Português'},
              {value: 'Educação física', label: 'Educação física'},
              {value: 'Artes', label: 'Artes'},
            ]}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Select
            name='weekDay'
            label='Dia da semana'
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terça-feira'},
              {value: '3', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feira'},
              {value: '5', label: 'Sexta-feira'},
              {value: '6', label: 'Sábado'},
            ]}
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
          />
          <Input
            type='time'
            name='time'
            label='Hora'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type='submit'>Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            name={teacher.name}
            image={teacher.avatar}
            bio={teacher.bio}
            subject={teacher.subject}
            price={teacher.cost}
            whatsapp={teacher.whatsapp}
          />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;
