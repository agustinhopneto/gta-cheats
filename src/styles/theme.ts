import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body, #root': {
        height: '100%',
      },
    },
  },
  fonts: {
    heading: 'Lexend Deca',
    body: 'Nunito Sans',
  },
  colors: {
    primary: {
      0: '#A277FF15',
      500: '#A277FF',
    },
    secondary: {
      0: '#61FFCA25',
      500: '#61FFCA',
    },
    background: {
      500: '#15141B',
    },
    foreground: {
      500: '#EDECEE',
    },
  },
});
