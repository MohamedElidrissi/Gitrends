import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header({ title }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6">{title}</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Gitrends',
};

export default Header;
