import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import {
  Container,
	LandingImg,
	Title,
	TextBold,
	ButtonsContainer,
	Button,
	ButtonText,
	TotalConnections,
} from './styles';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import heartImg from '../../assets/images/icons/heart.png';
import giveClassesImg from '../../assets/images/icons/give-classes.png';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useFocusEffect(() => {
    api.get('connections')
      .then(res => setTotalConnections(res.data.total));
  });

  const handleNavigateToGiveClasses = () => navigation.navigate('GiveClasses');

  const handleNavigateToStudyPages = () => navigation.navigate('Study');

  const navigation = useNavigation();

	return (
		<Container>
			<LandingImg source={landingImg} resizeMode='contain' />

			<Title>
				Seja bem-vindo, {'\n'}
				<TextBold>o que você deseja fazer?</TextBold>
			</Title>

			<ButtonsContainer>
				<Button
					onPress={handleNavigateToGiveClasses}
					style={{backgroundColor: '#9871F5'}}
				>
					<Image source={giveClassesImg} />

					<ButtonText>Dar aulas</ButtonText>
				</Button>

				<Button
					onPress={handleNavigateToStudyPages}
					style={{backgroundColor: '#04D361'}}
				>
					<Image source={studyImg} />

					<ButtonText>Estudar</ButtonText>
				</Button>
			</ButtonsContainer>

			<TotalConnections>
        Total de {totalConnections} conexões já realizadas {' '}
				<Image source={heartImg} />
			</TotalConnections>
		</Container>
	);
};

export default Landing;
