// import { Formik } from 'formik';
// import { Button, FormStyled, Input } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
// import { selectContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operation';
import { nanoid } from '@reduxjs/toolkit';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { DialogContentText, Fab } from '@mui/material';
import { AddIcCallOutlined } from '@mui/icons-material';

// const inithialValue = {
//   name: '',
//   number: '',
// };

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', number: '' });
  // const contactList = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const data = { name: formData.name, number: formData.number };
    dispatch(addContact({ ...data, id: nanoid() }));
    Notiflix.Notify.success('Add contacts');
    handleClose();
  };

  const handleInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const handleSubmit = (value, { resetForm }) => {
  //   const existingContact = contactList.some(
  //     contact => contact.number === value.number
  //   );

  //   if (existingContact) {
  //     Notiflix.Notify.failure(
  //       `Сontact with number ${value.number} is already in contacts`
  //     );
  //   } else {
  //     dispatch(addContact({ ...value, id: nanoid() }));
  //     Notiflix.Notify.success('Add contacts');
  //   }

  //   resetForm();
  // };

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
        style={{ marginTop: '20px', marginLeft: '20px' }}
      >
        <AddIcCallOutlined />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your name and phone number.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="number"
            label="Number"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactForm;
