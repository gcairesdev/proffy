import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker';

export const Container = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color: ${props => props.light ? "#FFF" : "#9C84A6"};
`;

export const InputContainer = styled.View`
  padding: 0 8px;
  margin-top: 10px;
  overflow: hidden;
  border-radius: 8px;
  background: #F8F8FC;
  border: 1px solid #E6E6F0;
`;

export const SelectInput = styled(Picker)`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-family: 'Archivo_400Regular';
`;
