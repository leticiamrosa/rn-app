import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Colors} from '@styles/Colors';

interface ISeparatorProps {
  style?: StyleProp<ViewStyle>;
}

export const Separator: React.FC<ISeparatorProps> = ({style}) => {
  return <View style={[styles.wrapper, style]} />;
};

const styles = StyleSheet.create({
  wrapper: {
    height: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    backgroundColor: Colors.GRAY700,
  },
});
