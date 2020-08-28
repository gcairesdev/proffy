import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const Label = styled.Text`
  color: #9C84A6;
  font-size: 18px;
  font-family: 'Poppins_400Regular';
`;

export const TextAreaContainer = styled.ScrollView`
  margin-top: 10px;
  border-radius: 8px;
  background: #F8F8FC;
  padding: 16px 16px 0 16px;
  border: 1px solid #E6E6F0;
`; 

export const TextAreaInput = styled.TextInput`
  font-size: 16px;
  font-family: 'Archivo_400Regular';
`;
