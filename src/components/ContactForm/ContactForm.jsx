import { Formik } from 'formik';
import { Button, FormStyled, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operation';
import { nanoid } from '@reduxjs/toolkit';

const inithialValue = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contactList = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    const existingContact = contactList.some(
      contact => contact.number === value.number
    );

    if (existingContact) {
      Notiflix.Notify.failure(
        `Сontact with number ${value.number} is already in contacts`
      );
    } else {
      dispatch(addContact({ ...value, id: nanoid() }));
      Notiflix.Notify.success('Add contacts');
    }

    resetForm();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Formik initialValues={inithialValue} onSubmit={handleSubmit}>
        <FormStyled>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number">Number</label>
          <Input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit">Add contact</Button>
        </FormStyled>
      </Formik>
    </>
  );
};

export default ContactForm;
