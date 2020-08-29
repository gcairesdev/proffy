import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import heartImg from '../../assets/images/icons/heart.png';
import giveClassesImg from '../../assets/images/icons/give-classes.png';

const Landing = () => {
  const navigation = useNavigation();

  const handleNavigateToGiveClasses = () => navigation.navigate('GiveClasses');

  const handleNavigateToStudyPages = () => navigation.navigate('Study');

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

			<TotalConnections>Total de 285 conexões já realizadas {' '}
				<Image source={heartImg} />
			</TotalConnections>
		</Container>
	);
};

export default Landing;
