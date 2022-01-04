import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { 
  useFonts, 
  Nunito_600SemiBold, 
  Nunito_700Bold, 
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito';

import AppStack from './src/routes/AppStack';

export default function App() {
  const [fontsLoader] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });
 
  if (!fontsLoader) {
    return <AppLoading />;
  } 

    return (
      <>
        <StatusBar 
            backgroundColor="transparent"
            translucent barStyle="dark-content" 
        />
        <AppStack />
      </>
    );
  }

