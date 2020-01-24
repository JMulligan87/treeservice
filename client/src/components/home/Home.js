import React from 'react';
import Slider from '../slider/Slider';
import ContactButton from '../contactButton/ContactButton';
import Icons from '../icons/Icons';
import { Typography, Grid, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: { marginBottom: '50px' },
  phone: {
    fontSize: '50px',
    backgroundColor: 'rgb(233, 232, 229)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px'
    }
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{
          marginTop: 'none'
        }}
      >
        <Slider />
      </Grid>
      <Grid style={{ margin: '50px 150px 50px 150px' }}>
        <Typography
          variant='h2'
          style={{ color: 'rgb(18, 93, 55)' }}
          align='center'
          className='heading'
        >
          Providing excellent service since 1994.
        </Typography>
        <br></br>
        <Typography paragraph>
          Manahawkin Tree Service, a family owned and operated company takes
          great pride in the work we do. Our customers are extremely important
          to us, and we strive to keep each and every customer a customer for
          life. We will listen to your needs, do the work you request, and help
          turn your property into the yard you always dreamed of.
        </Typography>
        <Typography paragraph>
          Tree and shrub removal and/or maintenance can be difficult and
          demanding. It requires specific tools and operators trained in the use
          of these tools. Many jobs can be too dangerous or too difficult for
          the average homeowner. We at Manahawkin Tree Service are trained in
          all aspects of tree removal, stump grinding, and trimming, all the
          while maintaining an excellent record of safety. All jobs are owner
          directed and supervised.
        </Typography>
        <Typography paragraph align='center'>
          Call us now and see what we can do to make your yard a showplace!
        </Typography>
        <Typography align='center'>
          <Link
            className={classes.phone}
            style={{ fontWeight: 300, color: 'rgb(18, 93, 55)' }}
            href='tel:6095978846'
          >
            609-597-8846
          </Link>
        </Typography>
        <Typography align='center'>
          <Link
            className={classes.phone}
            style={{ fontWeight: 300, color: 'rgb(18, 93, 55)' }}
            href='tel:6094940266'
          >
            On LBI: 609-494-0266
          </Link>
        </Typography>
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

export default Home;
