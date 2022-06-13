import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '@styles/Colors';

const SCREEN_HEADER_HEIGHT = 70;

export interface IScreenHeaderProps {
  title: string;
}

export const ScreenHeader = ({title = 'Header'}: IScreenHeaderProps) => {
  return (
    <View style={style.contentHeader}>
      <Text style={style.textTitle}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  contentHeader: {
    backgroundColor: Colors.BACKGROUND,
    height: SCREEN_HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  textTitle: {
    fontSize: 40,
    color: Colors.REGULAR,
  },
});
