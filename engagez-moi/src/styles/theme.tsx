import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Average Sans, sans-serif',
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Average Sans, sans-serif',
                },
                h1: {
                    fontFamily: 'Open Sans, sans-serif',
                },
                h2: {
                    fontFamily: 'Open Sans, sans-serif',
                },
                h3: {
                    fontFamily: 'Open Sans, sans-serif',
                },
                h4: {
                    fontFamily: 'Open Sans, sans-serif',
                },
                h5: {
                    fontFamily: 'Open Sans, sans-serif',
                },
                h6: {
                    fontFamily: 'Open Sans, sans-serif',
                },
                body1: {
                    fontFamily: 'Average Sans, sans-serif',
                },
                body2: {
                    fontFamily: 'Average Sans, sans-serif',
                },
            },
        },
    },
});

export default theme;
