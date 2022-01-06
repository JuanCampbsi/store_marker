import React, { useCallback, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';

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
import { useDispatch, useSelector } from 'react-redux';
import { AddCordenateToStore } from '../../store/modules/Cordenate/actions';
import { ICordenate, ICordenateItem } from '../../store/modules/Cordenate/types';


interface DescriptionProps {  
  latitude: Number;
  longitude: Number;
}

const schema = Yup.object().shape({
  name: Yup
    .string(),
  description: Yup
    .string()
})

export default function CreateStore() {
  const route = useRoute();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const params = route.params as DescriptionProps;
 
  const {
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleCreateStore = useCallback((store: ICordenate) => {
      const newTransaction: ICordenate = {
      id: String(uuid.v4()),
      name: store.name,
      description: store.description,
      latitude: String(params.latitude),
      longitude: String(params.longitude)
    }
    console.log(newTransaction)

    dispatch(AddCordenateToStore(newTransaction))


  }, [dispatch])

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
        />


        <ButtonNext onPress={handleSubmit(handleCreateStore)}>
          <ButtonTextNext>Register</ButtonTextNext>
        </ButtonNext>
      </LabelContainer>
    </Container>
  )
}

