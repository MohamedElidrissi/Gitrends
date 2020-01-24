import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';

function App() {
  return (
    <CssBaseline>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
