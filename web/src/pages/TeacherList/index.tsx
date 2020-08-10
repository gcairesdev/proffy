import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';

const TeacherList = () => {
  return(
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.' >
        <form id='search-teachers'>
          <Input name='subject' label='Matéria' />
          <Input name='week_day' label='Dia da semana' />
          <Input name='time' label='Hora' />
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          name='Guilherme Caires'
          image='https://avatars1.githubusercontent.com/u/54117888?v=4'
          bio='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quaerat quam unde fugiat, esse fugit quis error doloribus optio. Quo sunt nihil aut molestiae ipsum voluptatibus rerum voluptates sequi repellendus.'
          subject='Lógica de programação'
          price={80}
          whatsapp='71999999999'
       />
      </main>
    </div>
  );
}

export default TeacherList;
