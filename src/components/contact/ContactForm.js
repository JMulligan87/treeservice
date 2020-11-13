import React from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  forms: {
    marginLeft: 50,
    marginRight: 50,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 100,
      marginRight: 50,
    },
  },
}));

const onSubmit = async (e) => {
  e.preventDefault();

  const formElements = [...e.currentTarget.elements];

  formElements
    .filter((elem) => !!elem.value)
    .map(
      (element) =>
        encodeURIComponent(element.name) +
        '=' +
        encodeURIComponent(element.value)
    )
    .join('&');

  await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formElements,
  })
    .then(() => {
      <Redirect to='/success-page' />;
    })
    .catch((error) => alert(error));
};

function ContactForm() {
  const classes = useStyles();

  return (
    <form
      name='contact v2'
      method='post'
      action='/'
      className={classes.forms}
      required
      onSubmit={(e) => onSubmit(e)}
    >
      <input type='hidden' name='form-name' value='contact v2' />
      <TextField
        style={{ marginTop: 8, marginBottom: 8 }}
        id='name'
        name='name'
        label='Name'
        required={true}
        type='text'
        placeholder=''
        helperText=''
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        variant='filled'
      />
      <TextField
        style={{ marginTop: 8, marginBottom: 8 }}
        id='phone'
        name='phone'
        label='Phone'
        required={true}
        type='text'
        placeholder=''
        helperText=''
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        variant='filled'
      />
      <TextField
        style={{ marginTop: 8, marginBottom: 8 }}
        id='address'
        name='address'
        label='Address'
        required={true}
        type='text'
        placeholder=''
        helperText=''
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        variant='filled'
      />
      <TextField
        style={{ marginTop: 8, marginBottom: 8 }}
        id='message'
        name='message'
        label='Message'
        required={true}
        type='text'
        placeholder='Please describe the work you would like done.'
        helperText=''
        fullWidth
        margin='normal'
        multiline
        InputLabelProps={{
          shrink: true,
        }}
        variant='filled'
      />
      <Button
        variant='contained'
        type='submit'
        style={{
          marginBottom: 30,
          marginTop: 14,
          backgroundColor: 'rgb(18, 93, 55)',
          color: 'white',
        }}
      >
        Send Email
      </Button>
    </form>
  );
}

export default ContactForm;
