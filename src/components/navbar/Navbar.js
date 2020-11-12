import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
// import logo from '../../img/manatreeservice.jpg';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: '20%',
    maxHeight: '20%',
  },
  buttons: {
    margin: theme.spacing(2),
  },
  appBar: {
    borderBottomColor: 'rgb(18, 93, 55)',
    borderBottomStyle: 'solid',
    borderBottomWidth: '4px',
  },
  icon: {
    color: 'black',
    outline: 'none',
  },
  menuButton: {
    outline: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logo = 'https://ik.imagekit.io/wr3d55jhwe/treeservice/manatreeservice_muxXGaF0k.jpg'

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <Link href='/'>
          <div>
            <img src={logo} alt='logo' className={classes.logo} />
          </div>
        </Link>
        {}
        <Button className={classes.buttons} id='buttons'>
          <Link href='/'>Home</Link>
        </Button>
        <Button className={classes.buttons} id='buttons'>
          <Link href='/services'>Services</Link>
        </Button>
        <Button className={classes.buttons} id='buttons'>
          <Link href='/gallery'>Gallery</Link>
        </Button>
        <Button className={classes.buttons} id='buttons'>
          <Link href='/contact'>Contact</Link>
        </Button>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
          id='iconButton'
        >
          <MenuIcon className={classes.icon} />
        </IconButton>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link href='/'>Home</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/services'>Services</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/gallery'>Gallery</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/contact'>Contact</Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
