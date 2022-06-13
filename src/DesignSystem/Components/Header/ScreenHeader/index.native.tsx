import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '@styles/Colors';
import {Sizes} from '@designSystem/utils/styles/Sizes';
import {useNavigation} from '@react-navigation/native';

export interface IScreenHeaderProps {
  title: string;
  hasButtonBack?: boolean;
}

export const ScreenHeader = ({
  title = 'Header',
  hasButtonBack = false,
}: IScreenHeaderProps) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  const style = generateStyles({top});

  const onPressButtonBack = () => {
    return navigation.goBack();
  };

  const renderButtonBack = () => {
    if (!hasButtonBack) {
      return;
    }

    return (
      <View style={style.buttonBack}>
        <TouchableOpacity onPress={onPressButtonBack}>
          <Text style={style.buttonIcon}>{'<'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={style.contentHeader}>
      {renderButtonBack()}
      <Text style={style.textTitle}>{title}</Text>
    </View>
  );
};

interface IStyles {
  top: number;
}

const generateStyles = ({top}: IStyles) => {
  const SCREEN_HEADER_HEIGHT = top + 52;

  return StyleSheet.create({
    contentHeader: {
      backgroundColor: Colors.BACKGROUND,
      height: SCREEN_HEADER_HEIGHT,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: top,
    },
    textTitle: {
      fontSize: Sizes.MEDIUM,
      color: Colors.REGULAR,
    },
    buttonIcon: {
      fontSize: Sizes.MEDIUM,
    },
    buttonBack: {
      position: 'absolute',
      left: 16,
      top: top + 10,
    },
  });
};
