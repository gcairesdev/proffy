import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
	padding: 40px;
	background: #8257E5;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
	color: #FFF;
  margin: 40px 0;
	font-size: 24px;
	line-height: 32px;
  font-family: 'Archivo_700Bold';
`;

export const Description = styled.Text`
  color: #D4C2FF;
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins_400Regular';
`;
