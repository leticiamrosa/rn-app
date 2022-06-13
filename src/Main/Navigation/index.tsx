import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MenuScreen} from '@menu/Screen/MenuScreen/index.screen';

export enum MenuScreens {
  MENU = 'MENU',
  JOKES = 'JOKES',
}

const Stack = createStackNavigator();

export const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuScreens.MENU} component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
