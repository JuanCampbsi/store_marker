import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    onPress: any;
}

export const Container = styled.View`   
    width: 100%;
       
    padding: ${RFValue(33)}px;
`;

export const Title = styled.Text`
    color: #5c8599;
    font-size: ${RFValue(24)}px;
    font-family: Nunito_700Bold;

    margin-bottom: 32px;
    padding-bottom: 24px;
    

`;

export const TitleLabel = styled.Text`
    color: #8fa7b3;
    font-family: Nunito_600SemiBold;
    margin-bottom: 8px;

    font-size: ${RFValue(16)}px;
`;

export const ButtonNext = styled(RectButton)<Props>`
    background-color: #15c3d6;
    border-radius: 20px;

    justify-content: center;
    align-items: center;

    height: 56px;
    margin-top: 32px;
`;

export const ButtonTextNext = styled.Text`
    color: #FFF;
    font-family: Nunito_800ExtraBold;
    font-size: ${RFValue(20)}px;
`;

export const LabelContainer = styled.View`
    width: 100%;  
`;
