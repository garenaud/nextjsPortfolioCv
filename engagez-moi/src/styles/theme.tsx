import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, pink } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: pink[500],
    },
  },
  typography: {
    fontFamily: "'Average Sans', sans-serif",
    h1: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h2: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h3: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h4: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h5: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h6: {
      fontFamily: "'Open Sans', sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
console.log("theme ", theme);
export default theme;
