import React from 'react';
import {ScreenHeader, IScreenHeaderProps} from '../ScreenHeader/index.native';

export const ScreenWithHeader: React.FC<IScreenHeaderProps> = ({
  children,
  ...screenHeaderProps
}) => {
  return (
    <>
      <ScreenHeader {...screenHeaderProps} />
      {children}
    </>
  );
};
