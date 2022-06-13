import React from 'react';
import {AboutContainer} from './index.container';
import {ScreenWithHeader} from '@designSystem/Components/Header/ScreenWithHeader/index.native';

export const AboutScreen = () => {
  return (
    <ScreenWithHeader title="Sobre" hasButtonBack>
      <AboutContainer />
    </ScreenWithHeader>
  );
};
