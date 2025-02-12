// Define type for color palette
export type Palette = {
  primary: {
    black: string;
    white: string;
    lightGray: string;
    lightGrayBlack: string;
    red: string;
  };
  secondary: {
    pink: string;
    blue: string;
    lightBlue: string;
    deepBlue: string;
    teal: string;
    lightTeal: string;
    green: string;
    lightGreen: string;
    yellow: string;
    orange: string;
    purple: string;
  };
};

// Define type for fontWeight
export type FontWeight = {
  thin: number;
  extraLight: number;
  light: number;
  normal: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  black: number;
};

// Define type for size
export type Size = {
  small: string;
  medium: string;
  regular: string;
  large: string;
  xLarge: string;
  xxLarge: string;
  xxxLarge: string;
  xxxxLarge: string;
};

// Define type for typography
export type Typography = {
  fontRoboto: string;
};
