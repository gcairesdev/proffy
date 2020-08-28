import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding: 40px;
	align-items: center;
	background: #8257E5;
	justify-content: center;
`;

export const LandingImg = styled.Image`
	width: 100%;
`;

export const Title = styled.Text`
	color: #FFF;
	font-size: 20px;
	margin-top: 40px;
	line-height: 30px;
  font-family: 'Poppins_400Regular';
`;

export const TextBold = styled.Text`
	font-weight: bold;
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonsContainer = styled.View`
	width: 100%;
	margin-top: 40px;
	flex-direction: row;
	justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
	width: 48%;
	height: 150px;
	padding: 24px;
	background: #333;
	border-radius: 8px;
	align-items: center;
	justify-content: space-between;
`;

export const ButtonText = styled.Text`
	color: #FFF;
	font-size: 20px;
	font-family: 'Archivo_700Bold';
`;

export const TotalConnections = styled.Text`
	color: #D4C2FF;
	font-size: 12px;
	margin-top: 40px;
	line-height: 20px;
  font-family: 'Poppins_400Regular';
`;
