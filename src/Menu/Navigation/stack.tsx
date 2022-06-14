import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {JokesContext} from '@jokes/Context';
import {MenuScreen} from '@menu/Screen/MenuScreen/index.screen';
import {AboutScreen} from '@menu/Screen/AboutScreen/index.screen';
import {JokesScreen} from '@jokes/Screen/index.screen';
import {MenuScreens} from '@menu/Navigation/';

export const MenuStack = () => {
  const Stack = createStackNavigator();

  return (
    <JokesContext.Provider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={MenuScreens.MENU} component={MenuScreen} />

        <Stack.Screen name={MenuScreens.ABOUT} component={AboutScreen} />

        <Stack.Screen name={MenuScreens.JOKES} component={JokesScreen} />
      </Stack.Navigator>
    </JokesContext.Provider>
  );
};
