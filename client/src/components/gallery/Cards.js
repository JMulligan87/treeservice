import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Grid } from '@material-ui/core';
import pictures from '../../pictures.json';

const useStyles = makeStyles({
  root: {
    minWidth: 175,
    maxWidth: 400,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

export default function Cards() {
  const classes = useStyles();

  return (
    <>
      {pictures.map((picture) => (
        <Grid xs={12} sm={6} md={6} lg={3} xl={3} item>
          <Card key={picture.id} className={classes.root} variant='outlined'>
            <CardMedia
              className={classes.media}
              image={require('../../img' + picture.image)}
            />
          </Card>
        </Grid>
      ))}
    </>
  );
}
