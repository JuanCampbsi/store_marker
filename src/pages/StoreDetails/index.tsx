import React, { useCallback, useState } from 'react';
import { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

import mapMarkerImg from '../../images/map-marker.png';

import { 
  Container, 
  ContainerDetails,
  Title,
  Description,
  MapContainer,
  MapViewContainer,
  RoutesContainer,
  RoutesText
 } from './styles';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { ActivityIndicator, Alert } from 'react-native';

 interface DescriptionProps {    
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;  
}

interface IdSelect {
  id:string;
}

export default function StoreDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DescriptionProps[]>([]);
  
  async function loadTransactions() {
    setIsLoading(true);
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
    setIsLoading(false);
    setData(transactionsFormatted)
  }
  useFocusEffect(
    useCallback(() => {
      loadTransactions();      
    }, []),
  );

  return (    
    <Container>  
      { isLoading ? 
      <ActivityIndicator
        color={'red'}
        size={'large'}
      />
      : data.map(item => 
      <ContainerDetails key={item.id}>       
        <Title>{item.name}</Title>    
        <Description>{item.description}</Description> 
        

        <MapContainer>       
          <MapViewContainer 
            initialRegion={{
              latitude: -27.2092052,
              longitude: -49.6401092,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}          
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: item.latitude,
                longitude: item.longitude
              }}
            />
          </MapViewContainer>

          <RoutesContainer>
              <RoutesText>Ver rotas no Google Maps</RoutesText>      
          </RoutesContainer>      
        </MapContainer>
      </ContainerDetails>
    )}
    </Container>
  )
}

