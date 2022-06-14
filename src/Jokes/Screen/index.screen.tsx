import React from 'react';
import {ScreenWithHeader} from '@designSystem/Components/Header/ScreenWithHeader/index.native';
import {JokesContainer} from './index.container';

export const JokesScreen = () => {
  return (
    <ScreenWithHeader title="Piadas" hasButtonBack>
      <JokesContainer />
    </ScreenWithHeader>
  );
};
