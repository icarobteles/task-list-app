const lightTheme = {
  colors: {
    primary: {
      100: "#E5E5E5",
      900: "#ffffff",
    },
    secondary: {
      100: "#000000",
      900: "#282828",
    },
    terciary: {
      100: "#0A202E",
      900: "#19799F",
    },
  },
  fontFamilies: {
    primary: "Roboto",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
};

const darkTheme = {
  ...lightTheme,
  colors: {
    primary: {
      900: "#0A202E",
      100: "#19799F",
    },
    secondary: {
      900: "#000000",
      100: "#282828",
    },
    terciary: {
      900: "#E5E5E5",
      100: "#ffffff",
    },
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
