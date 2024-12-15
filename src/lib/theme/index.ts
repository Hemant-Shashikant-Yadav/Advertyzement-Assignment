import { palette } from './colors';

export const theme = {
  light: {
    background: palette.neutral[50],
    foreground: palette.neutral[900],
    primary: palette.primary.DEFAULT,
    secondary: palette.secondary.DEFAULT,
    accent: palette.accent.DEFAULT,
    muted: palette.neutral[100],
    'muted-foreground': palette.neutral[500],
    border: palette.neutral[200],
  },

} as const;