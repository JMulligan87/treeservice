import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Contact = () => {
  return (
    <Grid container>
      <Grid item lg={6}>
        <Typography variant='h2' align='center'>
          Contact Us
        </Typography>
      </Grid>
      <Grid item lg={6}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196397.2289864788!2d-74.44813011608312!3d39.72377365063033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c107b9824354e7%3A0xd94fcc4ee9b3e985!2sManahawkin%20Tree%20Service!5e0!3m2!1sen!2sus!4v1578671190104!5m2!1sen!2sus'
          width='600'
          title='work area'
          height='450'
          frameborder='0'
          style={{ border: 0 }}
          allowfullscreen=''
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default Contact;
