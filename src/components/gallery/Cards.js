import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  Grid,
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import images from './Images';


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
  modalImg: {
    maxWidth: '100%',
    height: 'auto',
  },
  appBar: {
    borderBottomColor: 'rgb(18, 93, 55)',
    borderBottomStyle: 'solid',
    borderBottomWidth: '4px',
  },
  icon: {
    color: 'black',
    marginLeft: 8,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function Cards() {
  const classes = useStyles();

  const [selectedCard, setCard] = useState(null);
  
  const handleClickOpen = (image) => {
    setCard(image);
    console.log('clicked');
  };

  const handleClose = () => {
    setCard(null);
  };

  return (
    <Fragment>
      {images.map((image) => (
        <Grid key={image.id}  xs={12} sm={6} md={6} lg={3} xl={3} item>
          <Card className={classes.root} variant='outlined'>
            <CardMedia
              className={classes.media}
              image={image.src}
              alt={image.title}
              onClick={() => handleClickOpen(image)}
            />
          </Card>
          </Grid>
  ))}
          
       
        
      <Dialog
        maxWidth='lg'
        open={selectedCard}
        onClick={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          </Toolbar>
        </AppBar>
        {selectedCard && (
          <img
            className={classes.modalImg}
            src={selectedCard.src}
            alt='treeservice'
          ></img>
        )}
      </Dialog>
    </Fragment>
  );
}
