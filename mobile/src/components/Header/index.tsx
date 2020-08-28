import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  TopBar,
  Title,
  Description
} from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const Header: React.FC<PageHeaderProps> = ({ title, description }) => {
  const navigation =  useNavigation();

  return (
    <Container>
      <TopBar>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Image source={backIcon} resizeMode='contain' />
        </TouchableOpacity>

        <Image source={logo} resizeMode='contain' />
      </TopBar>

      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  );
}

export default Header;
