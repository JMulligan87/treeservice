import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

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

    axios.post('/api/form', dataToSubmit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id='name'
        label='Name'
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
        variant='outlined'
        onClick={handleSubmit}
        style={{ marginBottom: 30, marginTop: 8 }}
      >
        Send Email
      </Button>
    </form>
  );
}

export default ContactForm;
