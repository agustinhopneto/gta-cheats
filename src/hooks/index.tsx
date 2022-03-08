import React from 'react';

import { ThemeColorsProvider } from './useThemeColor';

export const AppProvider: React.FC = ({ children }) => {
  return <ThemeColorsProvider>{children}</ThemeColorsProvider>;
};
