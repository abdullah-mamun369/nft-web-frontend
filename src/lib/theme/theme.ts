import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EC4899",
    },
    secondary: {
      main: "#8B5CF6",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#FFFFFF",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
