import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { 
  ButtonNext, 
  ButtonTextNext, 
  Container, 
  Input, 
  Title, 
  TitleLabel 
} from './styles';


interface StoresDataRouteParams {
  position: { 
    latitude: number, 
    longitude: number
  };
}

export default function CreateStore() {
  const route = useRoute();
  const navigation = useNavigation();

  const [open_on_weekends, setOpenOnWeekends] = useState(false);

  const params = route.params as StoresDataRouteParams;
  const position = params.position;

  function handleCreateStore() {
    console.log(position)
  } 

  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Description</Title>     

      <TitleLabel>Name</TitleLabel>      
        <Input />
      
      <TitleLabel>About</TitleLabel>
        <Input style={{ height: 110}}/>
     
      <ButtonNext onPress={handleCreateStore}>
          <ButtonTextNext>Register</ButtonTextNext>     
      </ButtonNext>          
    </Container>
  )
}

