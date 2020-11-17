import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

function ContactForm() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  // const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    } else if (e.target.name === 'address') {
      setAddress(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      phone,
      address,
      message,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', dataToSubmit }),
    })
      .then(window.location.replace('/success-page'))
      .catch((error) => alert(error));
  };

  // if (redirect) {
  //   return <Redirect push to={{ pathname: '/success-page' }} />;
  // }
  return (
    <form className={classes.forms} onSubmit={handleSubmit}>
      <TextField
        style={{ marginTop: 8, marginBottom: 8 }}
        name='name'
        label='Name'
        required={true}
        type='text'
        value={name}
        onChange={handleChange}
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
        name='phone'
        label='Phone'
        required={true}
        type='text'
        value={phone}
        onChange={handleChange}
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
        name='address'
        label='Address'
        required={true}
        type='text'
        value={address}
        onChange={handleChange}
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
        name='message'
        label='Message'
        required={true}
        type='text'
        value={message}
        onChange={handleChange}
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
