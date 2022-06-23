import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <IconButton
      aria-label='change theme'
      variant='ghost'
      isRound
      onClick={toggleColorMode}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
    />
  );
};
