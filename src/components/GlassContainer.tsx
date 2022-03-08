import React from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

import { useThemeColor } from '../hooks/useThemeColor';

export const GlassContainer: React.FC<BoxProps> = ({
  children,
  borderRadius,
  ...props
}) => {
  const { shapeBorder, shapeBackground } = useThemeColor();

  return (
    <Box
      backdropFilter="blur(16px)"
      borderRadius={borderRadius || 16}
      borderWidth="1px"
      borderColor={shapeBorder}
      bg={shapeBackground}
      boxShadow="lg"
      {...props}
    >
      {children}
    </Box>
  );
};
