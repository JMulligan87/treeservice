import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../img/manatreeservice.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    maxWidth: '20%',
    maxHeight: '20%'
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <a href='/'>
          <img src={logo} alt='logo' className={classes.logo} />
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
