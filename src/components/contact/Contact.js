import React from 'react';
import { Grid, Typography, makeStyles, Link } from '@material-ui/core';
import ContactForm from './ContactForm';
import Icons from '../icons/Icons';

const useStyles = makeStyles((theme) => ({
  contactHeaders: {
    fontWeight: '300',
    color: 'rgb(18, 93, 55)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.125rem',
    },
  },
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <Grid container style={{ marginTop: 50 }}>
      <Grid
        item
        className={classes.contact}
        xs={12}
        sm={12}
        md={12}
        lg={12}
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
          Mail: PO Box 60 Manahawkin NJ, 08050
        </Typography>
        <Typography variant='h5' gutterBottom>
          Hours: Monday to Friday, 9AM - 5PM.
        </Typography>
        <ContactForm />
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

export default Contact;
