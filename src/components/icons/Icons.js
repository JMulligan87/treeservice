import React from 'react';
import { Link } from '@material-ui/core';
// import FacebookIcon from '@material-ui/icons/Facebook';

const Icons = () => {
  return (
    <div>
      <Link
        target='_blank'
        href='https://www.facebook.com/pages/category/Tree-Cutting-Service/Manahawkin-Tree-Service-111964403581681/'
      >
        <i
          className='fab fa-facebook-square'
          style={{
            fontSize: '50px',
            marginRight: '10px',
            color: '#3b5999',
          }}
        ></i>
      </Link>

      <Link
        target='_blank'
        href='https://www.instagram.com/manahawkin_tree_service/?igshid=1kcyl98oao09f'
      >
        <i className='fab fa-instagram' style={{ fontSize: '50px' }}></i>
      </Link>
    </div>
  );
};

export default Icons;
