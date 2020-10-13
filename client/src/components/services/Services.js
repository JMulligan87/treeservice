import React from 'react';
import chipper from '../../img/chipper.JPG';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContactButton from '../contactButton/ContactButton';
import Icons from '../icons/Icons';

const useStyles = makeStyles((theme) => ({
  services: {
    borderStyle: 'solid',
    borderColor: 'rgb(18, 93, 55)',
    backgroundColor: 'white',
    borderWidth: '2px',
    borderRadius: '5px',
    width: '240px',
    textAlign: 'left',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      width: '300px',
    },
  },
  serviceText: {
    [theme.breakpoints.up('md')]: {
      fontSize: 30,
    },
  },
  estimates: {
    paddingLeft: '50px',
    paddingRight: '50px',
    marginTop: '100px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '150px',
      paddingRight: '150px',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '75px',
      paddingRight: '75px',
      marginTop: 0,
    },
  },
  subheader: {
    color: 'rgb(18, 93, 55)',
  },
  button: {
    order: 4,
    marginTop: '50px',
    marginBottom: '50px',
    [theme.breakpoints.up('md')]: {
      marginTop: '150px',
    },
  },
  service: {
    color: 'rgb(18, 93, 55)',
    marginBottom: 20,
    marginTop: '30px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
      marginBottom: 10,
      marginTop: 0,
    },
  },
  img: {
    order: 3,
    paddingRight: 50,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 25,
      paddingRight: 25,
    },
  },
  item1: {
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
  icon: {
    order: 5,
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Grid container style={{ marginTop: 50 }}>
      <Grid
        item
        className={classes.item1}
        align='center'
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
      >
        <div className={classes.estimates}>
          <Typography variant='h4' className={classes.subheader}>
            Areas Covered
          </Typography>
          <Typography paragraph>
            We service most of southern Ocean County, NJ, including all of Long
            Beach Island, Manahawkin, Stafford Twp., and Barnegat.
          </Typography>
          <Typography
            variant='h4'
            style={{ marginTop: 50 }}
            className={classes.subheader}
          >
            Free Estimates
          </Typography>
          <Typography paragraph>
            At Manahawkin Tree Services no job is too big, or too small. Feel
            free to call us for a free estimate, we will be happy to oblige.
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        className={classes.item2}
        align='center'
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
      >
        <Typography variant='h3' className={classes.service}>
          Services
        </Typography>
        <div className={classes.services}>
          <Typography
            className={classes.serviceText}
            style={{ marginTop: 10 }}
            variant='h5'
            gutterBottom
          >
            <i className='fas fa-tree'></i> Tree Removal
          </Typography>
          <Typography className={classes.serviceText} variant='h5' gutterBottom>
            <i className='fas fa-tree'></i> Trimming
          </Typography>
          <Typography className={classes.serviceText} variant='h5' gutterBottom>
            <i className='fas fa-tree'></i> Pruning
          </Typography>
          <Typography className={classes.serviceText} variant='h5' gutterBottom>
            <i className='fas fa-tree'></i> Chipping
          </Typography>
          <Typography className={classes.serviceText} variant='h5' gutterBottom>
            <i className='fas fa-tree'></i> Stump Grinding
          </Typography>
        </div>
      </Grid>

      <Grid className={classes.img} item xs={12} sm={12} md={4} lg={4} xl={4}>
        <img
          src={chipper}
          alt='tree service'
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            borderRadius: '5px',
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
        className={classes.icon}
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
