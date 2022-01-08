import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    position: relative;
`;


export const MapContainerView = styled(MapView)`
    width: 100%;
    height: 100%;
`;

export const SelectLocationButton = styled(RectButton)`
    background-color: #15c3d6;
    border-radius: 20px;

    justify-content: center;
    align-items: center;
    height: 56px;

    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 40px;
`;

export const ButtonText = styled.Text`
    font-family: Nunito_800ExtraBold;
    font-size: ${RFValue(20)}px;
    color: #FFF;
`;

