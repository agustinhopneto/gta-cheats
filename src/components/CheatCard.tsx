import React from 'react';

import { Box, Kbd, Text } from '@chakra-ui/react';

import { useThemeColor } from '../hooks/useThemeColor';
import { GlassContainer } from './GlassContainer';

type CheatCardProps = {
  name: string;
  cheat?: string[];
};

export const CheatCard: React.FC<CheatCardProps> = ({ name, cheat }) => {
  const { textBody } = useThemeColor();

  return (
    <GlassContainer px={5} py={4} borderRadius={8}>
      <Text color={textBody} mb={3}>
        {name}
      </Text>
      <Box>
        {cheat &&
          cheat.map(key => (
            <Kbd
              key={key.concat(Math.random().toString())}
              mr={0.3}
              color={textBody}
            >
              {key}
            </Kbd>
          ))}
      </Box>
    </GlassContainer>
  );
};
