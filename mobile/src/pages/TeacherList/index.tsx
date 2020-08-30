import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';

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
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleToggleFiltersVisible = () => {
    setIsFiltersVisible(!isFiltersVisible);
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
              label='Dia da semana'
              items={[
                {label: 'Domingo', value: '0'},
                {label: 'Segunda-feira', value: '1'},
                {label: 'Terça-feira', value: '2'},
                {label: 'Quarta-feira', value: '3'},
                {label: 'Quinta-feira', value: '4'},
                {label: 'Sexta-feira', value: '5'},
                {label: 'Sábado', value: '6'},
              ]}
            />
            <Select
              light
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
                <Input
                  light
                  label='Das'
                  placeholder='9:00'
                  placeholderTextColor='#C1BCCC'
                />
              </InputBlock>

              <InputBlock>
              <Input
                  light
                  label='Até'
                  placeholder='13:00'
                  placeholderTextColor='#C1BCCC'
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollTeacherList>
    </Container>
  );
}

export default TeacherList;
