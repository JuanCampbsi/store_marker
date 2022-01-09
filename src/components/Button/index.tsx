import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { StackHeaderProps } from '@react-navigation/stack';

import {
  Container,
  ShowCancelView,
  Title,
  Icon,
  IconCancel
} from './styles';


interface HeaderProps extends StackHeaderProps {
  showCancel?: boolean;
  title: string;
}

export default function Button({
  showCancel = true,
  title,
  navigation
}: HeaderProps) {

  function handleCancelCreateOrphanage() {
    navigation.navigate('MapStore');
  }

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Icon name={'arrow-left'} />
      </BorderlessButton>

      <Title>{title}</Title>

      {showCancel
        ? (
          <BorderlessButton onPress={handleCancelCreateOrphanage}>
            <IconCancel name="x" />
          </BorderlessButton>
        )
        : (
          <ShowCancelView />
        )}
    </Container>
  );
}
