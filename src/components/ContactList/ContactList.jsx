import Filter from 'components/Filter/Filter';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

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
