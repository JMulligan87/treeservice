import React from 'react';
import logo from '../../img/cut.JPG';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContactButton from '../contactButton/ContactButton';
import Icons from '../icons/Icons';

const useStyles = makeStyles(theme => ({
  services: {
    borderStyle: 'solid',
    borderColor: 'rgb(18, 93, 55)',
    backgroundColor: 'white',
    borderWidth: '2px',
    width: '300px',
    marginTop: '50px',
    textAlign: 'left'
  },
  estimates: {
    paddingLeft: '50px',
    paddingRight: '50px',
    marginTop: '30px'
  },
  subheader: {
    color: 'rgb(18, 93, 55)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    }
  },
  button: {
    marginTop: '30px',
    marginBottom: '50px'
  },
  service: {
    color: 'rgb(18, 93, 55)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '40px'
    }
  }
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Grid container style={{ marginTop: 100 }}>
      <Grid align='center' xs={12} sm={12} md={3} lg={3} xl={3}>
        <Typography item variant='h2' className={classes.service}>
          Services
        </Typography>
        <div className={classes.estimates}>
          <Typography variant='h4' className={classes.subheader}>
            Areas Covered
          </Typography>
          <Typography paragraph>
            We service most of southern Ocean County, NJ, including all of Long
            Beach Island, Manahawkin, Stafford Twp., Barnegat.
          </Typography>
          <Typography variant='h4' className={classes.subheader}>
            Free Estimates
          </Typography>
          <Typography paragraph>
            At Manahawkin Tree Services no job is too big, or too small. Feel
            free to call us for a free estimate, we will be happy to oblige.
          </Typography>
        </div>
      </Grid>
      <Grid
        align='center'
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={3}
        style={{ marginBottom: '30px' }}
      >
        <div className={classes.services}>
          <Typography variant='h5' gutterBottom>
            <i className='fas fa-tree'></i> Tree Removal
          </Typography>
          <Typography variant='h5' gutterBottom>
            <i className='fas fa-tree'></i> Stump Grinding
          </Typography>
          <Typography variant='h5' gutterBottom>
            <i className='fas fa-tree'></i> Trimming
          </Typography>
          <Typography variant='h5' gutterBottom>
            <i className='fas fa-tree'></i> Pruning
          </Typography>
          <Typography variant='h5' gutterBottom>
            <i className='fas fa-tree'></i> Chipping
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <img
          src={logo}
          alt='tree service'
          style={{
            position: 'relative',
            height: '100%',
            width: '100%'
          }}
        />
      </Grid>
      <Grid
        align='center'
        className={classes.button}
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <ContactButton />
      </Grid>
      <Grid
        item
        align='center'
        style={{ marginBottom: '50px' }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Icons />
      </Grid>
    </Grid>
  );
};

export default Services;
