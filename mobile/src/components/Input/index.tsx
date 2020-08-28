import React from 'react';

import { Container, Label, InputText } from './styles';

interface InputProps {
  label?: string;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
}

const Input:React.FC<InputProps> = ({ label, value, onChangeText }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText value={value} onChangeText={onChangeText} />
    </Container>
  );
};

export default Input;
