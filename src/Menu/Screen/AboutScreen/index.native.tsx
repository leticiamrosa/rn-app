import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Translation} from '@config/translate';

export const AboutContent = () => {
  return (
    <View style={style.container}>
      <Text>{Translation.ABOUT_DESCRIPTION}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
