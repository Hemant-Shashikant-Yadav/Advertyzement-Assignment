// Color palette definition
export const palette = {
  orange: {
    DEFAULT: '#CD5C08',
    rgb: '205, 92, 8',
  },
  cream: {
    DEFAULT: '#FFF5E4',
    rgb: '255, 245, 228',
  },
  sage: {
    DEFAULT: '#C1D8C3',
    rgb: '193, 216, 195',
  },
  teal: {
    DEFAULT: '#6A9C89',
    rgb: '106, 156, 137',
  },
} as const;

// Theme configuration using our color palette
export const themeColors = {
  light: {
    background: palette.cream.rgb,
    foreground: '20 14.3% 4.1%',
    card: '0 0% 100%',
    'card-foreground': '20 14.3% 4.1%',
    popover: '0 0% 100%',
    'popover-foreground': '20 14.3% 4.1%',
    primary: palette.orange.rgb,
    'primary-foreground': palette.cream.rgb,
    secondary: palette.sage.rgb,
    'secondary-foreground': '20 14.3% 4.1%',
    muted: palette.sage.rgb,
    'muted-foreground': '20 14.3% 45%',
    accent: palette.teal.rgb,
    'accent-foreground': palette.cream.rgb,
    destructive: '0 84.2% 60.2%',
    'destructive-foreground': palette.cream.rgb,
    border: palette.sage.rgb,
    input: palette.sage.rgb,
    ring: palette.orange.rgb,
  },
  dark: {
    background: '20 14.3% 4.1%',
    foreground: palette.cream.rgb,
    card: '20 14.3% 4.1%',
    'card-foreground': palette.cream.rgb,
    popover: '20 14.3% 4.1%',
    'popover-foreground': palette.cream.rgb,
    primary: palette.orange.rgb,
    'primary-foreground': palette.cream.rgb,
    secondary: palette.teal.rgb,
    'secondary-foreground': palette.cream.rgb,
    muted: '20 14.3% 14.1%',
    'muted-foreground': palette.sage.rgb,
    accent: palette.teal.rgb,
    'accent-foreground': palette.cream.rgb,
    destructive: '0 62.8% 30.6%',
    'destructive-foreground': palette.cream.rgb,
    border: palette.teal.rgb,
    input: palette.teal.rgb,
    ring: palette.orange.rgb,
  },
} as const;