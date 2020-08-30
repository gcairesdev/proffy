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

export const HeaderTop = styled.View`
  padding-right: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
	color: #FFF;
  margin: 40px 0 15px 0;
	font-size: 24px;
  max-width: 140px;
	line-height: 32px;
  font-family: 'Archivo_700Bold';
`;

export const Description = styled.Text`
  color: #D4C2FF;
  margin: 10px 0;
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins_400Regular';
`;
