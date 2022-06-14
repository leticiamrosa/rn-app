import React, {useRef} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {IJoke} from '@jokes/Interface/Joke';
import {Separator} from '@designSystem/Components/Separator/index.native';
import {Button} from '@designSystem/Components/Button';

interface IJokeContentProps {
  jokes: IJoke[];
  onPressBackButton: () => void;
}

interface IRenderItem {
  item: IJoke;
  index: number;
}

export const JokesContent = ({jokes, onPressBackButton}: IJokeContentProps) => {
  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  const renderItem = ({item, index}: IRenderItem) => {
    return (
      <View key={index}>
        <Text>{item.joke}</Text>
      </View>
    );
  };

  const renderFooterComponent = () => {
    return (
      <View style={styles.buttonWrapper}>
        <Button buttonText="Voltar" onPressButton={onPressBackButton} />
      </View>
    );
  };

  return (
    <View style={styles.content}>
      <FlatList
        data={jokes}
        renderItem={renderItem}
        viewabilityConfig={viewabilityConfig}
        ItemSeparatorComponent={() => <Separator style={styles.separator} />}
        ListFooterComponent={renderFooterComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  separator: {
    marginVertical: 20,
  },
  buttonWrapper: {
    paddingVertical: 20,
  },
});
