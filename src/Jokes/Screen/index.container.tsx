import React from 'react';
import {JokesContext} from '@jokes/Context';
import {JokesContent} from './index.native';
import {useNavigation} from '@react-navigation/native';

export const JokesContainer = () => {
  const navigation = useNavigation();
  const {jokes} = JokesContext.useContainer();

  const handleOnPressButton = () => {
    return navigation.goBack();
  };

  return <JokesContent jokes={jokes} onPressBackButton={handleOnPressButton} />;
};
