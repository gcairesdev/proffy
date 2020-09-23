import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '../../components/Header';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import {
  Container,
  ScrollTeacherList,
} from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => loadFavorites());

  return(
    <Container>
      <Header
        title='Meus proffys favoritos'
      />

      <ScrollTeacherList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollTeacherList>
    </Container>
  );
}

export default Favorites;
