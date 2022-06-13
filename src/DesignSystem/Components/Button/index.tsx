import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Colors, IColors} from '../../utils/styles/Colors';

interface IButtonProps {
  children?: React.ReactElement;
  buttonText: string;
  onPressButton: () => void;
  colors?: IColors;
  isLoading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
}

export const Button = ({
  buttonText,
  onPressButton,
  isLoading,
  buttonStyle,
}: IButtonProps) => {
  const content = useCallback(() => {
    if (isLoading) {
      return <Text style={style.buttonText}>Carregando...</Text>;
    }

    return <Text style={style.buttonText}>{buttonText}</Text>;
  }, [isLoading, buttonText]);

  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={(style.button, buttonStyle)}>
      <View style={style.button}>{content()}</View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: Colors.BUTTON_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: Colors.WHITE,
  },
});
