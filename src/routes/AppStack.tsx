import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import MapStore from '../pages/MapStore';
import SelectMapPosition from '../pages/SelectMapPosition';
import CreateStore from '../pages/CreateStore';
import StoreDetails from '../pages/StoreDetails';
import Button from '../components/Button';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          cardStyle: { backgroundColor: '#F2F3F5' }
        }}>
        <Screen 
          name="MapStore" 
          component={MapStore} 
        />

        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition}
          options={{ 
            headerShown: true,
            header: (props) => <Button title="Select to map" {...props} />,
          }}
        />
        
        <Screen 
          name="CreateStore" 
          component={CreateStore}
          options={{ 
            headerShown: true,
            header: (props) => <Button title="Register Stores" {...props} />,
          }}
        />
        
        <Screen 
          name="StoreDetails"
          component={StoreDetails}
          options={{ 
            headerShown: true,
            header: (props) => <Button title="Stores" showCancel={false} {...props} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}