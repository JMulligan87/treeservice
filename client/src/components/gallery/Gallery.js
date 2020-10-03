import React from 'react';
import Cards from './Cards';
import { Grid } from '@material-ui/core';
import ContactButton from '../contactButton/ContactButton';
import Icons from '../icons/Icons';

const Gallery = () => {
  return (
    <Grid container align='center' style={{ marginTop: 50 }}>
      <Cards />
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        align='center'
        style={{ marginTop: 50, marginBottom: '30px' }}
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

export default Gallery;
