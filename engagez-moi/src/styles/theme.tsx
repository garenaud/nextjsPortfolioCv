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

export default theme;
