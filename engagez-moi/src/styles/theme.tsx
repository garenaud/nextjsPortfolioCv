import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { lighten, darken } from '@mui/system/colorManipulator';

const primaryColor = '#f76b69';
const secondaryColor = '#262626';
const backgroundColor = '#f1eadc';

let theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      light: lighten(primaryColor, 0.2),
      dark: darken(primaryColor, 0.2),
      contrastText: '#fff',
    },
    secondary: {
      main: secondaryColor,
      light: lighten(secondaryColor, 0.2),
      dark: darken(secondaryColor, 0.2),
      contrastText: '#fff',
    },
    background: {
      default: backgroundColor,
      paper: '#fff',
    },
    text: {
      primary: secondaryColor,
      secondary: primaryColor,
    },
  },
  typography: {
    fontFamily: '"Akshar", sans-serif',
    h1: {
      fontFamily: '"Akshar", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Akshar", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Akshar", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Akshar", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Akshar", sans-serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Akshar", sans-serif',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: '"Akshar", sans-serif',
      fontWeight: 300,
      fontSize: '2rem',
      letterSpacing: '0.09rem',
    },
    body1: {
      fontFamily: '"Akshar", sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Akshar", sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Akshar", sans-serif',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: backgroundColor,
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
