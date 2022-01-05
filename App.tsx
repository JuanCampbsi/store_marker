import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';

import { 
  useFonts, 
  Nunito_600SemiBold, 
  Nunito_700Bold, 
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito';

import AppStack from './src/routes/AppStack';
import store from './src/store';

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
        <Provider store={store}>
          <StatusBar 
              backgroundColor="transparent"
              translucent barStyle="dark-content" 
          />
          <AppStack />
        </Provider>
      </>
    );
  }

