import * as React from 'react';

import { FaMoon, FaSun } from 'react-icons/fa';

import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react';

import { useThemeColor } from '../hooks/useThemeColor';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = () => {
  const { toggleColorMode } = useColorMode();
  const { textBody } = useThemeColor();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label="Switch color mode"
      color={textBody}
    />
  );
};
