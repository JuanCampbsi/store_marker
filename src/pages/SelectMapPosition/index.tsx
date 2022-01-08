import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../images/map-marker.png';

import { 
  ButtonText,
  Container, 
  MapContainerView,
  SelectLocationButton 
} from './styles';

interface Props {
  navigation?: boolean;
  navigate?: any;
}

export default function SelectMapPosition() {
  const navigation: Props = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0});
 

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }
  
  function handleNextStep() {  
    const { latitude, longitude} = position;
    navigation.navigate('CreateStore', { latitude, longitude } );
  }

  return (
    <Container>  
      <MapContainerView
         initialRegion={{
            latitude: -27.2092052,
            longitude: -49.6401092,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
        }}
        onPress={handleSelectMapPosition}
      >
     
        { !!position.latitude && (
          <Marker 
            icon={mapMarkerImg}
            coordinate={position}
          />
        )}
      
      </MapContainerView> 

      { !!position.latitude && (
        <SelectLocationButton onPress={handleNextStep}>
          <ButtonText>Next</ButtonText>          
        </SelectLocationButton>        
      )}
    </Container>
  )
}

