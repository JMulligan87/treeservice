import React from 'react';
import { Link } from '@material-ui/core';
// import FacebookIcon from '@material-ui/icons/Facebook';

const Icons = () => {
  return (
    <div>
      <Link href='/'>
        <i
          className='fab fa-facebook-square'
          style={{
            fontSize: '50px',
            marginRight: '10px',
            color: '#3b5999'
          }}
        ></i>
      </Link>

      <Link href='/'>
        <i className='fab fa-instagram' style={{ fontSize: '50px' }}></i>
      </Link>
    </div>
  );
};

export default Icons;
