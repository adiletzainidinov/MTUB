import { FontWeight, Palette, Size, Typography } from "./types";

const palette: Palette = {
  primary: {
    black: '#030303',
    white: '#FFFFFF',
    lightGray: '#F2F2F2',
    red: '#FF0000',
  },
  secondary: {
    pink: '#EC407A',
    blue: '#0E39E8',
    lightBlue: '#1B74FF',
    deepBlue: '#1976D2',
    teal: '#009688',
    lightTeal: '#4DB6AC',
    green: '#4CAF50',
    lightGreen: '#81C784',
    yellow: '#FFEB3B',
    orange: '#FF9800',
    purple: '#9C27B0',
  },
};

const fontWeight: FontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

const size: Size = {
  small: '8px',
  medium: '16px',
  regular: '18px',
  large: '20px',
  xLarge: '24px',
  xxLarge: '32px',
  xxxLarge: '48px',
  xxxxLarge: '64px',
};

const typography: Typography = {
  fontRoboto: 'Roboto',
};

export const theme = {
  palette,
  fontWeight,
  size,
  typography,
};
