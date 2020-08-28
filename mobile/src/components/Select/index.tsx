import React, { ReactText } from 'react';
import { Picker } from '@react-native-community/picker';

import {
  Container,
  Label,
  InputContainer,
  SelectInput,
} from './styles';

interface SelectProps {
  items: {
    label: string;
    value: string;
  }[];
  label?: string;
  selectedValue?: string | null;
  onValueChange?(itemValue: ReactText, itemIndex: number): void; 
}

const Select: React.FC<SelectProps> = ({ 
  label,
  items,
  selectedValue,
  onValueChange 
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <SelectInput
          mode='dropdown'
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          <Picker.Item label='Selecione uma opção' value='' />
          {items.map(item => (
            <Picker.Item key={item.value} label={item.label} value={item.value}/>
          ))}
        </SelectInput>
      </InputContainer>
    </Container>
  );
}

export default Select;