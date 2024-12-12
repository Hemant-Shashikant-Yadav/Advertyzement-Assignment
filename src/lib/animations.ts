export const keyframes = {
  fadeIn: {
    from: {
      opacity: '0',
      transform: 'translateY(20px)',
    },
    to: {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },
  pulse: {
    '0%, 100%': {
      opacity: '1',
      transform: 'scale(1)',
    },
    '50%': {
      opacity: '0.7',
      transform: 'scale(1.05)',
    },
  },
  wave: {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '50%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(100%)',
    },
  },
} as const;

export const animations = {
  fadeIn: 'fadeIn 1s ease-out',
  pulse: 'pulse 2s infinite',
  wave: 'wave 2s infinite',
} as const;