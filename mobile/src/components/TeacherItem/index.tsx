import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
  HeartOutlineIcon,
  HeartIcon,
  WhatsAppIcon,
} from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';

interface Teacher {
  id: number;
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return(
    <Container>
      <Profile>
        <Avatar source={{ uri: 'https://github.com/gcairesdev.png'}} />

        <ProfileInfo>
          <Name>Guilherme Caires</Name>
          <Subject>Matemática</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit earum magnam! Optio quia et libero
        nulla ea adipisci molestias veritatis laudantium incidunt, neque ex itaque iste id explicabo modi!
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'  '}
          <PriceValue>R$ 20,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton>
            <HeartOutlineIcon source={heartOutlineIcon} />
          </FavoriteButton>

          <ContactButton>
            <HeartOutlineIcon source={whatsappIcon} />
            <ContactButtonText>
              Entrar em contato
            </ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;
