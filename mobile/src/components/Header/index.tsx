import React, { ReactNode } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  TopBar,
  HeaderTop,
  Title,
  Description,
} from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
  description?: string;
}

const Header: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  description,
  children
}) => {
  const navigation =  useNavigation();

  return (
    <Container>
      <TopBar>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Image source={backIcon} resizeMode='contain' />
        </TouchableOpacity>
        <Image source={logo} resizeMode='contain' />
      </TopBar>

      <HeaderTop>
        <Title>{title}</Title>
        {headerRight}
      </HeaderTop>

      {description && <Description>{description}</Description>}
      {children}
    </Container>
  );
}

export default Header;
