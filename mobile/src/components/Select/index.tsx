import React, { ReactText } from 'react';
import { Picker } from '@react-native-community/picker';
import { PickerProps } from '@react-native-community/picker/typings/Picker';

import {
  Container,
  Label,
  InputContainer,
  SelectInput,
} from './styles';

interface SelectProps extends PickerProps {
  items: {
    label: string;
    value: string;
  }[];
  label?: string;
  light?: boolean;
}

const Select: React.FC<SelectProps> = ({ label, items, light, ...rest }) => {
  return (
    <Container>
      <Label light={light}>{label}</Label>

      <InputContainer>
        <SelectInput {...rest} >
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
