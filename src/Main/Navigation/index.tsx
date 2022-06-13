import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuStack} from '@menu/Navigation/stack';

export const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <MenuStack />
    </NavigationContainer>
  );
};
