import React from 'react';

import { ChakraProvider, Container, theme } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container w="100%" maxW="980px" h="100vh">
        <ColorModeSwitcher />
      </Container>
    </ChakraProvider>
  );
};
