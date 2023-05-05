import Filter from 'components/Filter/Filter';
import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operation';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {visibleContacts.length !== 0 && <Filter />}
        {isLoading && !error && <b>Request in progress...</b>}
        {visibleContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
