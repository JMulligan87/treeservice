import React from 'react';
import { Button, Link } from '@material-ui/core';

const ContactButton = () => {
  return (
    <Button variant='outlined'>
      <Link href='/contact'>
        LET US HELP YOU MAKE YOUR YARD A MORE ENJOYABLE AND BEAUTIFUL PLACE
      </Link>
    </Button>
  );
};

export default ContactButton;
