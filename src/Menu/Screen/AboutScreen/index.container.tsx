import React from 'react';
import {AboutContent} from './index.native';
import {useNavigation} from '@react-navigation/native';

export const AboutContainer = () => {
  const navigation = useNavigation();

  const handleOnPressButton = () => {
    return navigation.goBack();
  };

  return <AboutContent onPressBackButton={handleOnPressButton} />;
};
