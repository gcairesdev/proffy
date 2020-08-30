import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #F0F0F7;
`;

export const FilterButton = styled.TouchableOpacity``;

export const ScrollTeacherList = styled.ScrollView`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitButton = styled(RectButton)`
  height: 56px;
  margin-top: 20px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  background: #08B361;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  margin-left: 16px;
  font-family: 'Archivo_700Bold';
`;
