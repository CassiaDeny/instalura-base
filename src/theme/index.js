import { typographyVariants } from "./typografyVariants";
const colors = {
  background: {
    light: {
      color: "#FFFFFF",
    },
    main: {
      color: "#F2F2F2",
    },
  },
  borders: {
    main: {
      color: "#F1F1F1",
    },
  },
  primary: {
    main: {
      color: "#D7385E",
      contrastText: "#fff",
    },
  },
  secondary: {
    main: {
      color: "#FB7B6B",
      contrastText: "#fff",
    },
  },
  tertiary: {
    main: {
      color: "#070C0E",
      contrastText: "#fff",
    },
    light: {
      color: "#88989E",
      contrastText: "#fff",
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  colors,
  borderRadius: "8px",
  transition: "200 ease-in-out",
  fontFamily: "'Rubic', sans/-serif",
  typographyVariants,
};
