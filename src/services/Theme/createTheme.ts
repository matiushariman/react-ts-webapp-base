import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#61dafb' },
    secondary: { main: '#20232a' },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        colorTransparent: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          [theme.breakpoints.up('md')]: {
            paddingTop: 16,
            paddingBottom: 16,
          },
          [theme.breakpoints.down('md')]: {
            paddingTop: 8,
            paddingBottom: 8,
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          letterSpacing: 'normal',
        },
        contained: {
          padding: '8px 24px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '3rem',
          fontWeight: 'bold',
        },
        h2: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
        h3: {
          fontSize: '1.25rem',
          fontWeight: 'bold',
        },
      },
    },
  },
});
