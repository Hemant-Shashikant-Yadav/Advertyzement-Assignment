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
  dark: {
    background: palette.neutral[900],
    foreground: palette.neutral[50],
    primary: palette.primary.light,
    secondary: palette.secondary.light,
    accent: palette.accent.light,
    muted: palette.neutral[800],
    'muted-foreground': palette.neutral[400],
    border: palette.neutral[700],
  },
} as const;