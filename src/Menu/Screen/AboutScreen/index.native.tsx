import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Translation} from '@config/translate';
import {Colors} from '@styles/Colors';
import {Sizes} from '@designSystem/utils/styles/Sizes';
import {Button} from '@designSystem/Components/Button';

interface IAboutContentProps {
  onPressBackButton: () => void;
}

export const AboutContent = ({onPressBackButton}: IAboutContentProps) => {
  const renderFooterComponent = () => {
    return (
      <View style={styles.buttonWrapper}>
        <Button buttonText="Voltar" onPressButton={onPressBackButton} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Translation.ABOUT_DESCRIPTION}</Text>
      {renderFooterComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: Sizes.REGULAR,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    paddingBottom: 40,
  },
});
