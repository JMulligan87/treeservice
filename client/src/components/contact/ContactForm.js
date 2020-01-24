import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = e => {
    if (e.target.id === 'name') {
      setName(e.target.value);
    } else if (e.target.id === 'phone') {
      setPhone(e.target.value);
    } else if (e.target.id === 'address') {
      setAddress(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      phone,
      address,
      message
    };

    name === '' || phone === '' || address === '' || message === ''
      ? setOpen(true)
      : axios.post('/api/form', dataToSubmit);

    // Clear Fields
    setName('');
    setPhone('');
    setAddress('');
    setMessage('');
  };

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} required>
      <TextField
        id='name'
        label='Name'
        required={true}
        type='text'
        value={name}
        onChange={handleChange}
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
        id='phone'
        label='Phone'
        required={true}
        type='text'
        value={phone}
        onChange={handleChange}
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
        id='address'
        label='Address'
        required={true}
        type='text'
        value={address}
        onChange={handleChange}
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
        id='message'
        label='Message'
        required={true}
        type='text'
        value={message}
        onChange={handleChange}
        style={{ margin: 8 }}
        placeholder='Please describe the work you would like done.'
        helperText=''
        fullWidth
        margin='normal'
        multiline
        InputLabelProps={{
          shrink: true
        }}
        variant='filled'
      />
      <Button
        variant='contained'
        onClick={handleSubmit}
        style={{
          marginBottom: 30,
          marginTop: 8,
          backgroundColor: 'rgb(18, 93, 55)',
          color: 'white'
        }}
      >
        Send Email
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error'>
          All fields required!
        </Alert>
      </Snackbar>
    </form>
  );
}

export default ContactForm;
