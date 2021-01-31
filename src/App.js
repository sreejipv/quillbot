import React from 'react';
import Box from '@material-ui/core/Box';
import './App.css';
import Home from './Pages/Home';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#11a683',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});


function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
        <Box component="div" >
          <Home/>
        </Box>
        </ThemeProvider>
    </>
  );
}

export default App;
