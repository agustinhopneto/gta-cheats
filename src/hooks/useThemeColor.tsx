import React, { createContext, useContext } from 'react';

import { useColorModeValue } from '@chakra-ui/color-mode';

interface ThemeColorsProps {
  primary: string;
  background: string;
  bannerFooter: string;
  shapeBackground: string;
  shapeBorder: string;
  textBody: string;
}

const ThemeColorsContext = createContext<ThemeColorsProps>(
  {} as ThemeColorsProps,
);

export const ThemeColorsProvider: React.FC = ({ children }) => (
  <ThemeColorsContext.Provider
    value={{
      primary: useColorModeValue('primary.500', 'secondary.500'),
      background: useColorModeValue('foreground.500', 'background.500'),
      bannerFooter: useColorModeValue('primary.500', 'secondary.0'),
      shapeBackground: useColorModeValue('primary.0', 'whiteAlpha.50'),
      shapeBorder: useColorModeValue('primary.0', 'whiteAlpha.200'),
      textBody: useColorModeValue('background.500', 'foreground.500'),
    }}
  >
    {children}
  </ThemeColorsContext.Provider>
);

export const useThemeColor = (): ThemeColorsProps => {
  return useContext(ThemeColorsContext);
};
