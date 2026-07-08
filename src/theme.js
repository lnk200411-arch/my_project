import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FB92B1',
      light: '#F9B8CB',
      dark: '#F2698C',
      contrastText: '#000000',
    },
    secondary: {
      main: '#000000',
      light: '#3A3A3A',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#FDF6DA',
      dark: '#F0E5B8',
      contrastText: '#000000',
    },
    background: {
      default: '#EDEDED',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#3A3A3A',
      disabled: '#7A7A7A',
    },
  },
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
    h1: { fontSize: '3rem', fontWeight: 500, lineHeight: 1.2 },
    h2: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.3 },
    h3: { fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.4 },
    body1: { fontSize: '0.9375rem', fontWeight: 400, lineHeight: 1.6 },
    body2: { fontSize: '0.8125rem', fontWeight: 400, lineHeight: 1.6 },
    caption: { fontSize: '0.6875rem', fontWeight: 500, lineHeight: 1.4 },
  },
  spacing: 8,
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontSize: '0.6875rem',
          fontWeight: 700,
          height: '22px',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export default theme;
