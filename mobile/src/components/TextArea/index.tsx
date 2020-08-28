import React from 'react';

import { Container, Label, TextAreaContainer, TextAreaInput } from './styles';

interface TextAreaProps {
  label: string;
  lines: number;
}

const TextArea:React.FC<TextAreaProps> = ({ label, lines }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextAreaContainer nestedScrollEnabled>
        <TextAreaInput
          multiline={true}
          numberOfLines={lines}
          style={{textAlignVertical: "top"}}
        />
      </TextAreaContainer>
    </Container>
  );
};

export default TextArea;
