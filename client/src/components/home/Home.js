import React from 'react';
import tree from '../../img/cut.jpg';
import { Typography, Grid, Link } from '@material-ui/core';

const Home = () => {
  return (
    <Grid container>
      <img
        src={tree}
        alt='tree service'
        style={{
          position: 'relative',
          height: '100%',
          width: '100%'
        }}
      />
      <Grid style={{ margin: '50px 150px 50px 150px' }}>
        <Typography variant='h2' align='center'>
          In business since the 1900's.
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
            href='tel:6095978846'
            style={{
              backgroundColor: 'white',
              fontWeight: 400,
              fontSize: '50px'
            }}
          >
            609-597-8846
          </Link>
        </Typography>
        <Typography align='center'>
          <Link
            href='tel:6094940266'
            style={{
              backgroundColor: 'white',
              fontSize: '50px',
              fontWeight: 400
            }}
          >
            On LBI: 609-494-0266
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
