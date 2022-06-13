import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, IColors} from '../../utils/styles/Colors';

interface IButtonProps {
  children?: React.ReactElement;
  buttonText: string;
  onPressButton: () => void;
  colors?: IColors;
  isLoading?: boolean;
}

export const Button = ({
  children,
  buttonText,
  onPressButton,
  isLoading,
}: IButtonProps) => {
  const content = useCallback(() => {
    if (typeof children !== 'string') {
      return children;
    }

    if (isLoading) {
      <Text>Loading...</Text>;
    }

    return <Text>{buttonText}</Text>;
  }, [children, buttonText, isLoading]);

  return (
    <TouchableOpacity onPress={onPressButton}>
      <View style={style.button}>{content()}</View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 22,
    color: Colors.REGULAR,
  },
});
