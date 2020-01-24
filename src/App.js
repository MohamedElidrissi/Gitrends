import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <CssBaseline>
      <ThemeProvider>
        <Typography variant="h3">Gitrends</Typography>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
