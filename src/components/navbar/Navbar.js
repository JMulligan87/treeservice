import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../img/manatreeservice.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    maxWidth: '20%',
    maxHeight: '20%'
  },
  button: {
    margin: theme.spacing(2)
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Link href='/'>
          <div>
            <img src={logo} alt='logo' className={classes.logo} />
          </div>
        </Link>
        <Button className={classes.button}>
          <Link href='/'>Home</Link>
        </Button>
        <Button className={classes.button}>
          <Link href='/company'>Company</Link>
        </Button>
        <Button className={classes.button}>
          <Link href='/services'>Services</Link>
        </Button>
        <Button className={classes.button}>
          <Link href='/contact'>Contact</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
