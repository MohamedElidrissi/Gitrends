import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import Header from './components/Header';

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
