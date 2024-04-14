import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ADE34D",
    },
    secondary: {
      main: colors.amber[100],
    },

  },
  components: {},
  typography: {
    fontFamily: "Open Sans",
  },
});
