import React, { useCallback, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarkerImg from '../../images/map-marker.png';

import { 
  CalloutContainer,
  CalloutText,
  Container,
  CreateStoreButton,
  Footer,
  FooterText,
  MapContainerView
 } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';


interface Props {
  navigation?: boolean;
  navigate: any;
}

interface DescriptionProps {    
  id: string;
  name: string;
  description: string;
  latitude:number,
  longitude:number, 
}

export default function MapStore() {
  const navigation : Props = useNavigation(); 
  const [data, setData] = useState<DescriptionProps[]>([]);
   

  async function loadTransactions() {
    const dataKey = `@store_marker:transactions`;
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];
    
    const transactionsFormatted: DescriptionProps[] = transactions
    .map((item: DescriptionProps) => {
      const latitude = Number(item.latitude);
      const longitude = Number(item.longitude);
      
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        latitude,
        longitude
      };
     }
    )
    setData(transactionsFormatted)
  }

  function handleNavigateToCreateStore() {
    navigation.navigate('SelectMapPosition');
  }

  function handleNavigateToStoreDetails() {    
    navigation.navigate('StoreDetails'); 
  }

   useFocusEffect(
    useCallback(() => {
      loadTransactions();      
    }, []),
  );

  return (
    <Container>    
        <MapContainerView
         showsUserLocation={true}	 
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -27.2092052,
            longitude: -49.6401092,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}        
        >
          {data.map(item=>
            <Marker 
              key={item.id}
              icon={mapMarkerImg}             
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude
              }}
              title={item.name}
              description={item.description}            
            >
              <Callout               
                tooltip={true} 
                onPress={() => handleNavigateToStoreDetails()}
              >
              <CalloutContainer>
                <CalloutText>{item.name}</CalloutText>              
              </CalloutContainer>            
          </Callout>
        </Marker>
      )}
      </MapContainerView>


      <Footer>
        <FooterText>Cadastrar Lojas</FooterText>    
          <CreateStoreButton onPress={handleNavigateToCreateStore}>
             <Feather name="plus" size={24} color="#FFF" />
          </CreateStoreButton>          
      </Footer>
    </Container>
  );
}

