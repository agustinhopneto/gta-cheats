import React, { useCallback, useRef, useState } from 'react';

import { FaXbox, FaPlaystation, FaDesktop } from 'react-icons/fa';

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { CheatCard } from '../components/CheatCard';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { GlassContainer } from '../components/GlassContainer';
import { LogoIcon } from '../components/icons/LogoIcon';
import cheatsList from '../data/cheats.json';
import { useThemeColor } from '../hooks/useThemeColor';

const filterOptions = [
  {
    name: 'PC',
    value: 'pc',
    icon: FaPlaystation,
  },
  {
    name: 'Xbox',
    value: 'xbox',
    icon: FaXbox,
  },
  {
    name: 'PlayStation',
    value: 'ps',
    icon: FaDesktop,
  },
];

type Cheat = {
  name: string;
  cheats: {
    pc?: string[];
    xbox?: string[];
    ps?: string[];
  };
};

type Filters = {
  name?: string;
  platform?: 'pc' | 'xbox' | 'ps';
};

export const Home: React.FC = () => {
  const { primary, textBody, background } = useThemeColor();
  const name = useRef<HTMLInputElement>(null);
  const platform = useRef<HTMLSelectElement>(null);
  const [platformValue, setPlatformValue] = useState<'pc' | 'xbox' | 'ps'>(
    'pc',
  );
  const [cheats, setCheats] = useState<Cheat[]>(cheatsList);

  const loadCheats = useCallback(
    ({ name: filterName = '', platform: filterPlatform = 'pc' }: Filters) => {
      const newCheatsList = cheatsList.filter(cheat =>
        cheat.name.toLowerCase().includes(filterName.toLowerCase()),
      );
      setPlatformValue(filterPlatform);
      setCheats(newCheatsList);
    },
    [],
  );

  const handleSearch = useCallback(() => {
    loadCheats({
      name: name.current?.value,
      platform: platform.current?.value as 'pc' | 'xbox' | 'ps',
    });
  }, [loadCheats]);

  return (
    <Container w="100%" maxW="1160px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={3}
      >
        <Icon as={LogoIcon} w={32} h={12} color={primary} />
        <ColorModeSwitcher />
      </Box>
      <Banner />
      <GlassContainer borderRadius={8} px={5} py={4} mb={3}>
        <Heading mb={2} fontWeight={500} size="sm" color={textBody}>
          Filters
        </Heading>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Input
            w="48%"
            variant="flushed"
            placeholder="Cheat name"
            borderColor={primary}
            color={textBody}
            focusBorderColor={primary}
            ref={name}
          />
          <Select
            variant="flushed"
            focusBorderColor={primary}
            w="48%"
            borderColor={primary}
            colorScheme={primary}
            color={textBody}
            ref={platform}
          >
            {filterOptions.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
        <Button
          display="block"
          color={background}
          bg={primary}
          transition="all 0.1s"
          ml="auto"
          mt={3}
          _hover={{
            filter: 'brightness(0.8)',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </GlassContainer>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        {cheats.map(
          cheat =>
            cheat.cheats[platformValue] && (
              <GridItem key={cheat.name}>
                <CheatCard
                  name={cheat.name}
                  cheat={cheat.cheats[platformValue]}
                />
              </GridItem>
            ),
        )}
      </Grid>
    </Container>
  );
};
