import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
  
    padding: 24px;
    background-color: #f9fafc ;
   
    border-bottom-width: 1px;
    border-color: #DDE3F0;
    margin-top: 44px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: Nunito_600SemiBold;
    color: #8fa7b3;
    font-size: 20px;
`;

export const Icon= styled(Feather)`
    width: 100%;
    left: 5px;

    font-size: 24px;
    color: #15B6D6; 
`;

export const IconCancel= styled(Feather)`
    width: 100%;
    right: 20px;

    font-size: 24px;
    color: #FF669D; 
`;


export const ShowCancelView= styled.View`
    width: 100%;
`;

