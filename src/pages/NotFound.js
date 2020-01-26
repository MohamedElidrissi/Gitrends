import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import FourOhFour from '../images/not-found.svg';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing('6'),
    marginBottom: theme.spacing('6'),
  },
  text: {
    marginTop: theme.spacing('4'),
  },
}));

function NotFound() {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        className={classes.container}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <img src={FourOhFour} width="500" alt="Page not found" />
        <Typography className={classes.text} variant="h4" component="h1">
          This page was not found
        </Typography>
      </Grid>
    </Container>
  );
}

export default NotFound;
