import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Header from '../../components/Header';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import {
  Container,
  ScrollTeacherList,
  SearchForm,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
  FilterButton,
 } from './styles';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [week_day, setWeekDay] = useState(0);
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleToggleFiltersVisible = () => {
    setIsFiltersVisible(!isFiltersVisible);
  }

  const handleSubmitFilters = async () => {
    const { data } = await api.get('classes', {
      params: {
        week_day,
        subject,
        time,
      }
    });

    setIsFiltersVisible(false);
    setTeachers(data);
  }

  return(
    <Container>
      <Header
        title='Proffys disponíveis'
        headerRight={(
          <FilterButton onPress={handleToggleFiltersVisible} >
            <Feather name='filter'size={20} color='#FFF' />
          </FilterButton>
        )}
      >
        {isFiltersVisible && (
          <SearchForm>
            <Select
              light
              selectedValue={subject}
              onValueChange={itemValue => setSubject(String(itemValue))}
              label='Matéria'
              items={[
                {label: 'Matemática', value: '0'},
                {label: 'Química', value: '1'},
                {label: 'Física', value: '2'},
                {label: 'Biologia', value: '3'},
                {label: 'Geografia', value: '4'},
                {label: 'História', value: '5'},
                {label: 'Filosofia', value: '6'},
                {label: 'Sociologia', value: '7'},
                {label: 'Português', value: '8'},
                {label: 'Redação', value: '9'},
                {label: 'Educação física', value: '10'},
              ]}
            />
            <InputGroup>
              <InputBlock>
                <Select
                  light
                  selectedValue={week_day}
                  onValueChange={itemValue => setWeekDay(Number(itemValue))}
                  label='Dia da semana'
                  items={[
                    {label: 'Domingo', value: 0},
                    {label: 'Segunda-feira', value: 1},
                    {label: 'Terça-feira', value: 2},
                    {label: 'Quarta-feira', value: 3},
                    {label: 'Quinta-feira', value: 4},
                    {label: 'Sexta-feira', value: 5},
                    {label: 'Sábado', value: 6},
                  ]}
                />
              </InputBlock>

              <InputBlock>
                <Input
                  light
                  label='Horário'
                  value={time}
                  placeholder='9:00'
                  placeholderTextColor='#C1BCCC'
                  onChangeText={text => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleSubmitFilters}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </Header>

      <ScrollTeacherList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </ScrollTeacherList>
    </Container>
  );
}

export default TeacherList;
