import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Grid, Dialog, Slide } from '@material-ui/core';
import pictures from '../../pictures.json';

const useStyles = makeStyles({
  root: {
    minWidth: 175,
    maxWidth: 410,
    marginBottom: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function Cards() {
  const classes = useStyles();

  const [selectedCard, setCard] = useState(null);

  const handleClickOpen = (picture) => {
    setCard(picture);
    console.log('clicked');
  };

  const handleClose = () => {
    setCard(null);
  };

  return (
    <Fragment>
      {pictures.map((picture) => (
        <Grid key={picture.id} xs={12} sm={6} md={6} lg={3} xl={3} item>
          <Card className={classes.root} variant='outlined'>
            <CardMedia
              className={classes.media}
              image={require('../../img' + picture.image)}
              alt={picture.title}
              onClick={() => handleClickOpen(picture)}
            />
          </Card>
        </Grid>
      ))}
      <Dialog
        open={selectedCard}
        onClick={handleClose}
        TransitionComponent={Transition}
      >
        {selectedCard && (
          <img
            src={require('../../img' + selectedCard.image)}
            alt={selectedCard.title}
          ></img>
        )}
      </Dialog>
    </Fragment>
  );
}
