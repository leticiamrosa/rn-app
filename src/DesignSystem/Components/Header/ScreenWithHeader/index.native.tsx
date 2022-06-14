import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenHeader, IScreenHeaderProps} from '../ScreenHeader/index.native';
import {Colors} from '@designSystem/utils/styles/Colors';

export const ScreenWithHeader: React.FC<IScreenHeaderProps> = ({
  children,
  ...screenHeaderProps
}) => {
  return (
    <>
      <ScreenHeader {...screenHeaderProps} />
      <View style={styles.wrapper}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE,
  },
});
