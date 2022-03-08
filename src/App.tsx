import React from 'react';

import '@fontsource/lexend-deca';
import '@fontsource/nunito-sans';

import { ChakraProvider } from '@chakra-ui/react';

import { Background } from './components/Background';
import { AppProvider } from './hooks';
import { Home } from './pages/Home';
import { theme } from './styles/theme';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Background>
          <Home />
        </Background>
      </AppProvider>
    </ChakraProvider>
  );
};
