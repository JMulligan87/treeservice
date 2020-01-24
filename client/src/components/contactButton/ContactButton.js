import React from 'react';
import { Button, Link } from '@material-ui/core';

const ContactButton = () => {
  return (
    <Button
      variant='contained'
      style={{
        backgroundColor: 'rgb(18, 93, 55)',
        color: 'white'
      }}
    >
      <Link
        href='/contact'
        style={{
          color: 'white'
        }}
      >
        CLICK HERE TO CONTACT US
      </Link>
    </Button>
  );
};

export default ContactButton;
