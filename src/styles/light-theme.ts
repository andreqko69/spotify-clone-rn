import baseTheme from './base-theme';

const lightTheme = {
  colors: {
    typography: {
      primary: '#b3b3b3',
      secondary: '#ffffff',
    },
    background: {
      primary: '#191414',
      primaryActive: '#1db954',
      secondary: '#535353',
    },
  },
  ...baseTheme,
} as const;

export default lightTheme;
