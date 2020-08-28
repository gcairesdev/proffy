import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { 
  Container,
  Scroll,
  Fieldset,
  Legend,
  Line,
  HourContainer,
  HourItem,
  Bottom,
  Warning,
  WarningText,
  Button,
  ButtonText,
  AddScheduleContainer,
  AddScheduleBtn,
  AddScheduleText,
} from './styles';

import TextArea from '../../components/TextArea';
import Header from '../../components/Header';
import Select from '../../components/Select';
import Input from '../../components/Input';

import warningImg from '../../assets/images/icons/warning.png';

const GiveClasses = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: null, from: '', to: '' }
  ]);

  const isEmptyScheduleItem = () => {
    const isEmpty = scheduleItems.filter(({ week_day, from, to }) => {
      if(week_day === null || from === '' || to === ''){
        return true;
      } else {
        return false;
      }
    });
     
    if (isEmpty.length > 0) return true;

    return false;
  }

  const addNewScheduleItem = () => {
    if(isEmptyScheduleItem()) return null;
  
    setScheduleItems([
      ...scheduleItems,
      { week_day: null, from: '', to: '' }
    ]);
  }

  const setScheduleItemValue = (
    position: number, field: string, value: string
  ) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) =>
      index === position ? { ...scheduleItem, [field]: value } : scheduleItem
    );

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <Container>
      <Scroll nestedScrollEnabled>
        <Header
          title='Proffs disponíveis'
          description='O primeiro passo é preencher esse formulário de inscrição.'
        />

        <Fieldset>
          <Legend>Seus dados</Legend>
          <Line />
          <Input label='Nome completo' />
          <Input label='Avatar' />
          <Input label='WhatsApp' />
          <TextArea label='Biografia' lines={5} />
        </Fieldset>

        <Fieldset>
          <Legend>Sobre a aula</Legend>
          <Line />
          <Input label='Matéria' />
          <Input label='Custo da hora aula' />
        </Fieldset>

        <Fieldset>
          <Legend>Horários disponíveis</Legend>
          <Line />
          {scheduleItems.map((scheduleItem, index) => (
            <View key={index}>
              <Select 
                label='Dia da semana'
                selectedValue={scheduleItem.week_day}
                onValueChange={
                  itemValue => 
                  setScheduleItemValue(index, 'week_day', String(itemValue))
                }
                items={[
                  {label: 'Domingo', value: '0'},
                  {label: 'Segunda-feira', value: '1'},
                  {label: 'Terça-feira', value: '2'},
                  {label: 'Quarta-feira', value: '3'},
                  {label: 'Quinta-feira', value: '4'},
                  {label: 'Sexta-feira', value: '5'},
                  {label: 'Sábado', value: '6'},
                ]}
              />
              <HourContainer>
                <HourItem>
                  <Input
                    label='Das'
                    value={scheduleItem.from}
                    onChangeText={text => {
                      setScheduleItemValue(index, 'from', text)
                    }}
                  />
                </HourItem>
                <HourItem>
                  <Input
                    label='Até'
                    value={scheduleItem.to}
                    onChangeText={text => {
                      setScheduleItemValue(index, 'to', text)
                    }}
                  />
                </HourItem>
              </HourContainer>
            </View>
          ))}

          <AddScheduleContainer>
            <AddScheduleBtn onPress={addNewScheduleItem}>
              <AddScheduleText>
                + Novo horário
              </AddScheduleText>
            </AddScheduleBtn>
          </AddScheduleContainer>
        </Fieldset>

        <Line />

        <Bottom>
          <Warning>
            <Image source={warningImg} resizeMode='contain' />
            <WarningText>Preencha todos os dados.</WarningText>
          </Warning>
          <Button>
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </Bottom>
      </Scroll>
    </Container>
  );
}

export default GiveClasses;
