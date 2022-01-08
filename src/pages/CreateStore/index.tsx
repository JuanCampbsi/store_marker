import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ButtonNext,
  ButtonTextNext,
  Container,
  Title,
  TitleLabel,
  LabelContainer
} from './styles';

import { InputForm } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

interface Props {
  navigation?: boolean;
  navigate?: any;
}

interface DescriptionProps {    
  id: string;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string(),
  description: Yup
    .string()
})

export default function CreateStore() {
  const route = useRoute();
  const navigation: Props = useNavigation();

  const params =  route.params as DescriptionProps;

  const newParams ={
    ...params
  }

  const {
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema)
  });

 async function handlerCreateStore(form: DescriptionProps){
  const newTransaction: DescriptionProps = {
    id: String(uuid.v4()),
    name: form.name,
    description: form.description,
    latitude: newParams.latitude,
    longitude: newParams.longitude
  }
  
  try {     
    const dataKey = `@store_marker:transactions`;
    const data = await AsyncStorage.getItem(dataKey);
    const currentData = data ? JSON.parse(data) : [];

    const dataFormatted = [
      ...currentData,
      newTransaction
    ]
   
    await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
    navigation.navigate('MapStore')
  } catch (error) {
    console.log(error);
    Alert.alert('Não foi possível salvar');
     }    
   }
 
 
 return (
    <Container>
      <Title>Description</Title>

      <LabelContainer>
        <TitleLabel>Name</TitleLabel>
        <InputForm
          name='name'
          control={control}
        />

        <TitleLabel>About</TitleLabel>
        <InputForm
          name='description'
          control={control}
          style={{height: 200 }}
        />  

        <ButtonNext onPress={handleSubmit(handlerCreateStore)}>
          <ButtonTextNext>Register</ButtonTextNext>
        </ButtonNext>
      </LabelContainer>
    </Container>
  )
}

