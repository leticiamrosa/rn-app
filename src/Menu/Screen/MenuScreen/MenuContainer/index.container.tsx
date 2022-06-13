import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useJokesHook} from '@jokes/Hooks/Joke';
import {Colors} from '@designSystem/utils/styles/Colors';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@designSystem/Components/Button';
import {MenuScreens} from '@menu/Navigation/';

enum ButtonText {
  JOKES = 'JOKES',
  SOBRE = 'SOBRE',
}

export const MenuContainer = () => {
  const navigation = useNavigation();
  const {getJokes, jokes, error, loading} = useJokesHook();

  const handleOnPressJokes = async () => {
    try {
      await getJokes();
      navigation.navigate(MenuScreens.ABOUT);
    } catch {
      // navigation error
    }
  };

  const handleOnPressAbout = () => {};

  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <Button
          buttonStyle={style.button}
          buttonText={ButtonText.JOKES}
          onPressButton={handleOnPressJokes}
          isLoading={loading}
        />
        <Button
          buttonStyle={style.button}
          buttonText={ButtonText.SOBRE}
          onPressButton={handleOnPressAbout}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
  },
  wrapper: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 22,
    color: Colors.REGULAR,
  },
});
