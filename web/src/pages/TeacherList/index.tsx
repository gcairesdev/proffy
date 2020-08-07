import React from 'react';

import PageHeader from '../../components/PageHeader';
import './styles.css';
import TeacherItem from '../../components/TeacherItem';

const TeacherList = () => {
  return(
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.' >
        <form id='search-teachers'>
          <div className='input-block'>
            <label htmlFor='subject'>Matéria</label>
            <input type="text" name="subject" id="subject"/>
          </div>

          <div className='input-block'>
            <label htmlFor='week-day'>Dia da semana</label>
            <input type="text" name="week-day" id="week-day"/>
          </div>

          <div className='input-block'>
            <label htmlFor='time'>Hora</label>
            <input type="text" name="time" id="time"/>
          </div>
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
