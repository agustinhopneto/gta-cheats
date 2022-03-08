import React from 'react';

import { FiTerminal } from 'react-icons/fi';

import { Box, Divider, Heading, Icon, Text } from '@chakra-ui/react';

import womanImg from '../assets/woman.jpg';
import { useThemeColor } from '../hooks/useThemeColor';
import { GlassContainer } from './GlassContainer';

export const Banner: React.FC = () => {
  const { textBody, bannerFooter } = useThemeColor();
  return (
    <GlassContainer display="flex" mb={3} w="100%">
      <Box display="flex" flexDir="column" justifyContent="space-between">
        <Box py={12} px={12}>
          <Heading
            lineHeight={1.1}
            color={textBody}
            fontSize="6xl"
            fontWeight="extrabold"
            bgGradient="linear(to-br, primary.500, secondary.500)"
            bgClip="text"
            mb={8}
          >
            Grand Theft Auto: San Andreas
          </Heading>
          <Divider w="30%" />
        </Box>
        <Box
          py={5}
          px={12}
          display="flex"
          alignItems="center"
          bg={bannerFooter}
          borderRadius="0 0 0 16px"
        >
          <Icon as={FiTerminal} w={6} h={6} color={textBody} />

          <Text fontWeight="bold" fontSize="xl" ml="12px" color={textBody}>
            Cheats
          </Text>
        </Box>
      </Box>
      <Box
        backgroundImage={womanImg}
        backgroundSize="cover"
        width={600}
        borderRadius="0 16px 16px 0"
      />
    </GlassContainer>
  );
};
