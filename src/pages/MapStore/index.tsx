import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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
import { useSelector } from 'react-redux';

interface Props {
  navigation?: boolean;
  navigate: any;
}

interface DataProps {
  id: string;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
}

export default function MapStore() {
  const state = useSelector<DataProps>(state => state);
  

  const data = {
    state
  }

  console.log(data);

  const navigation : Props = useNavigation();

  function handleNavigateToCreateStore() {
    navigation.navigate('SelectMapPosition');
  }

  function handleNavigateToStoreDetails() {
    navigation.navigate('StoreDetails');
  }

  return (
    <Container>    
        <MapContainerView 
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -27.2092052,
            longitude: -49.6401092,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}        
        >
            <Marker 
              icon={mapMarkerImg}
              calloutAnchor={{ x: 2.7, y: 0.8 }}
              coordinate={{ 
                latitude: -27.2092052,
                longitude: -49.6401092
              }}              
            >
              <Callout 
                tooltip={true} 
                onPress={handleNavigateToStoreDetails}
              >
              <CalloutContainer>
                <CalloutText>Loja pizzarias</CalloutText>              
              </CalloutContainer>            
          </Callout>
        </Marker>
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

