import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      dark: indigo[900],
      main: indigo[700],
      light: indigo[500],
    },
    secondary: {
      main: pink['A400'],
    },
  },
});
