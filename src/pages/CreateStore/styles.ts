import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
    flex: 1px;
`;

export const Title = styled.Text`
    color: #5c8599;
    font-size: 24px;
    font-family: Nunito_700Bold;
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom-width: 0.8px;
    border-bottom-color: #D3E2E6;
`;

export const TitleLabel = styled.Text`
    color: #8fa7b3;
    font-family: Nunito_600SemiBold;
    margin-bottom: 8px;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    border-width: 1.4px;
    border-color: #d3e2e6;
    border-radius: 20px;
    

    padding: 18px;    
    margin-bottom: 16px;    
   
    font-size: 16px;
`;

export const ButtonNext = styled(RectButton)`
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
    font-size: 16px;
`;
