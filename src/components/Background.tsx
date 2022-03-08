import React from 'react';

import { Box } from '@chakra-ui/react';

import backgroundImg from '../assets/background.svg';
import { useThemeColor } from '../hooks/useThemeColor';

export const Background: React.FC = ({ children }) => {
  const { background } = useThemeColor();

  return (
    <Box
      backgroundImage={backgroundImg}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      backgroundColor={background}
    >
      {children}
    </Box>
  );
};
