import React from 'react';
import {MenuContainer} from './MenuContainer/index.container';
import {ScreenWithHeader} from '@designSystem/Components/Header/ScreenWithHeader/index.native';

export const MenuScreen = () => {
  return (
    <ScreenWithHeader title="App">
      <MenuContainer />
    </ScreenWithHeader>
  );
};
