import React from 'react';
import tree from '../../img/cut.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  return (
    <div className='wrapper'>
      <Grid mb=''>
        <img
          src={tree}
          alt='tree service'
          style={{
            //   position: 'absolute',
            height: '100%',
            width: '100%'
          }}
        />
      </Grid>

      <Grid wrapper='true' style={{ margin: '50px 150px 50px 150px' }}>
        <Typography variant='h2' align='center'>
          In business since the 1900's.
        </Typography>
        <br></br>
        <Typography paragraph='true'>
          Manahawkin Tree Service, a family owned and operated company takes
          great pride in the work we do. Our customers are extremely important
          to us, and we strive to keep each and every customer a customer for
          life. We will listen to your needs, do the work you request, and help
          turn your property into the yard you always dreamed of.
        </Typography>
        <Typography paragraph='true'>
          Tree and shrub removal and/or maintenance can be difficult and
          demanding. It requires specific tools and operators trained in the use
          of these tools. Many jobs can be too dangerous or too difficult for
          the average homeowner. We at Manahawkin Tree Service are trained in
          all aspects of tree removal, stump grinding, and trimming, all the
          while maintaining an excellent record of safety. All jobs are owner
          directed and supervised.
        </Typography>
      </Grid>
    </div>
  );
};

export default Home;
