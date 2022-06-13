import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useJokesHook} from '@jokes/Hooks/Joke';
import {Colors} from '@designSystem/utils/styles/Colors';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@designSystem/Components/Button';

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
      // navigation.navigate();
    } catch {
      // navigation error
    }
  };

  const handleOnPressAbout = () => {};

  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <Button
          buttonText={ButtonText.JOKES}
          onPressButton={handleOnPressJokes}
          isLoading={loading}
        />
        <Button
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
  },
  wrapper: {
    backgroundColor: 'red',
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
