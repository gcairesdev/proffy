import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  Label,
  InputText
} from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  light?: boolean;
}

const Input:React.FC<InputProps> = ({ label, light, ...rest }) => {
  return (
    <Container>
      <Label light={light}>{label}</Label>
      <InputText {...rest} />
    </Container>
  );
};

export default Input;
