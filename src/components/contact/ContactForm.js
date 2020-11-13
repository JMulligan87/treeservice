import React from 'react';
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

function ContactForm() {
  const classes = useStyles();

  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [address, setAddress] = useState('');
  // const [message, setMessage] = useState('');
  // const [open, setOpen] = useState(false);

  // const handleChange = (e) => {
  //   if (e.target.id === 'name') {
  //     setName(e.target.value);
  //   } else if (e.target.id === 'phone') {
  //     setPhone(e.target.value);
  //   } else if (e.target.id === 'address') {
  //     setAddress(e.target.value);
  //   } else {
  //     setMessage(e.target.value);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const dataToSubmit = {
  //     name,
  //     phone,
  //     address,
  //     message,
  //   };

  //   name === '' || phone === '' || address === '' || message === ''
  //     ? setOpen(true)
  //     : fetch("/", {
  //       method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: dataToSubmit,
  //     });

  //   // Clear Fields
  //   setName('');
  //   setPhone('');
  //   setAddress('');
  //   setMessage('');
  // };

  // const handleClose = (_event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <form name="contact"
     method="post" 
     action="/success/"
     className={classes.forms}  
     required
     >
      <input type="hidden" name="form-name" value="contact" />
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
        type="submit"
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
