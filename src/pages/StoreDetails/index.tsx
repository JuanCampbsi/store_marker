import React from 'react';
import { Marker } from 'react-native-maps';

import mapMarkerImg from '../../images/map-marker.png';

import { 
  Container, 
  ContainerDetails,
  Title,
  Description,
  MapContainer,
  Separator,
  MapViewContainer,
  RoutesContainer,
  RoutesText
 } from './styles';

export default function StoreDetails() {
  return (
    <Container>   
      <ContainerDetails>   
        <Title>Pizzaria parmê</Title>    
        <Description>sasasasasasaSASA DASD ADA  SA SAS.</Description> 
        <Separator /> 

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
                latitude: -27.2092052,
                longitude: -49.6401092
              }}
            />
          </MapViewContainer>

          <RoutesContainer>
              <RoutesText>Ver rotas no Google Maps</RoutesText>      
          </RoutesContainer>      
        </MapContainer>
      </ContainerDetails>
    </Container>
  )
}

