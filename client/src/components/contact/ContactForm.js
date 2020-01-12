import React from 'react';
import { TextField, Button } from '@material-ui/core';

const ContactForm = () => {
  return (
    <form>
      <TextField
        id='filled-full-width'
        label='Name'
        style={{ margin: 8 }}
        placeholder=''
        helperText=''
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true
        }}
        variant='filled'
      />
      <TextField
        id='filled-full-width'
        label='Email'
        style={{ margin: 8 }}
        placeholder=''
        helperText=''
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true
        }}
        variant='filled'
      />
      <TextField
        id='filled-full-width'
        label='Phone'
        style={{ margin: 8 }}
        placeholder=''
        helperText=''
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true
        }}
        variant='filled'
      />
      <TextField
        id='filled-full-width'
        label='Message'
        style={{ margin: 8 }}
        placeholder=''
        helperText=''
        fullWidth
        margin='normal'
        multiline
        InputLabelProps={{
          shrink: true
        }}
        variant='filled'
      />
      <Button variant='outlined' style={{ marginBottom: 30, marginTop: 8 }}>
        Send Email
      </Button>{' '}
    </form>
  );
};

export default ContactForm;
