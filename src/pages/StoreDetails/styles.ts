import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;  
`;

export const ContainerDetails = styled.View`
  padding:  ${RFValue(24)}px;
`;

export const Title = styled.Text`
  color: #4D6F80;

  font-size:  ${RFValue(30)}px;
  font-family: Nunito_700Bold;
  bottom: 10px;
`;

export const Description = styled.Text`
  font-family: Nunito_600SemiBold;
  font-size: ${RFValue(16)}px;

  color: #5c8599;
  
  line-height: 24px;
  margin-top: ${RFValue(16)}px;  
`;

export const MapContainer = styled.View`
  background-color: #E6F7FB;
  
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #B3DAE2;

  margin-top: ${RFValue(24)}px; 
`;



export const MapViewContainer = styled(MapView)`
   width: 100%;
   height: ${RFValue(300)}px;
`;

export const RoutesContainer = styled.View`
  padding: ${RFValue(16)}px;

  align-items: center;
  justify-content: center;
`;


export const RoutesText = styled.Text`
  font-family: Nunito_700Bold;
  font-size: ${RFValue(14)}px;;

  color: #0089a5;  
`;




