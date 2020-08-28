import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
	align-items: center;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
`;

export const Fieldset = styled.View`
  width: 100%;
  padding: 0 40px;
  margin: 20px 0;
`;

export const Legend = styled.Text`
  width: 100%;
  display: flex;
	color: #32264D;
	font-size: 24px;
	margin-top: 40px;
	line-height: 30px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Archivo_700Bold';
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: #E6E6F0;
`;

export const HourContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HourItem = styled.View`
  width: 48%;
`;

export const AddScheduleContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  align-items: flex-end;
`;

export const AddScheduleBtn = styled.TouchableOpacity`
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid #8257E5;
`;

export const AddScheduleText = styled.Text`
  color: #666;
  font-size: 16px;
`;

export const Bottom = styled.View`
  width: 100%;
  padding: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Warning = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WarningText = styled.Text`
  color: #9C98A6;
  max-width: 130px;
  margin-left: 10px;
  font-family: 'Poppins_400Regular';
`;

export const Button = styled.TouchableOpacity`
	height: 50px;
	padding: 15px;
	border-radius: 8px;
  background: #04D361;
  justify-content: center;
`;

export const ButtonText = styled.Text`
	color: #FFF;
	font-size: 20px;
	font-family: 'Archivo_700Bold';
`;
