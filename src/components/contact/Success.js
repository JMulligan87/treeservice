import React from 'react';
import { Grid, Typography, makeStyles, Link } from '@material-ui/core';
import Icons from '../icons/Icons';

const useStyles = makeStyles((theme) => ({
  contactHeaders: {
    fontWeight: '300',
    color: 'rgb(18, 93, 55)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.125rem',
    },
  },
  thankyou: {
    borderStyle: 'solid',
    borderColor: 'rgb(18, 93, 55)',
    backgroundColor: 'white',
    marginTop: '50px',
    borderWidth: '2px',
    borderRadius: '5px',
    width: '400px',
    textAlign: 'center',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
  },
  thankText: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25 rem',
    },
  },
}));

const Success = () => {
  const classes = useStyles();
  return (
    <Grid container style={{ marginTop: 50 }}>
      <Grid
        item
        className={classes.contact}
        xs={12}
        sm={12}
        md={6}
        lg={6}
        align='center'
      >
        <Typography
          variant='h3'
          className={classes.contactHeaders}
          gutterBottom
        >
          Contact Us
        </Typography>
        <Typography variant='h5' gutterBottom>
          Kenny Updegrave
        </Typography>
        <Typography gutterBottom>
          <Link
            href='tel:6095978846'
            style={{
              fontSize: '25px',
              fontWeight: 400,
              backgroundColor: 'rgb(233, 232, 229)',
            }}
          >
            Phone: 609-597-8846
          </Link>
        </Typography>
        <Typography gutterBottom>
          <Link
            href='tel:6094940266'
            style={{
              fontSize: '25px',
              fontWeight: 400,
              backgroundColor: 'rgb(233, 232, 229)',
            }}
          >
            On LBI: 609-494-0266
          </Link>
        </Typography>
        <Typography variant='h5' gutterBottom>
          Hours: Monday to Friday, 9AM - 5PM.
        </Typography>

        <div className={classes.thankyou}>
          <Typography
            variant='h3'
            className={classes.contactHeaders}
            style={{ marginTop: '10px' }}
            gutterBottom
          >
            Thank You!
          </Typography>
          <Typography
            className={classes.thankText}
            variant='h5'
            style={{ marginTop: '10px' }}
          >
            We will get back to you within 24 hours,
          </Typography>
          <Typography
            className={classes.thankText}
            variant='h5'
            style={{ marginBottom: '10px' }}
          >
            Monday - Friday, during normal business hours.
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        className={classes.map}
        align='center'
      >
        <Typography
          variant='h3'
          className={classes.contactHeaders}
          gutterBottom
        >
          Area Served
        </Typography>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196397.2289864788!2d-74.44813011608312!3d39.72377365063033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c107b9824354e7%3A0xd94fcc4ee9b3e985!2sManahawkin%20Tree%20Service!5e0!3m2!1sen!2sus!4v1578671190104!5m2!1sen!2sus'
          width='600'
          title='work area'
          height='450'
          frameBorder='2px'
          allowFullScreen=''
        ></iframe>
      </Grid>
      <Grid
        item
        align='center'
        style={{ marginBottom: '50px', marginTop: '50px' }}
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

export default Success;
