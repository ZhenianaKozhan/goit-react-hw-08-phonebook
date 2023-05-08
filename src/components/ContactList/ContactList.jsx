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
    <ul>
      {visibleContacts.length !== 0 && <Filter />}
      {isLoading && !error && <b>Request in progress...</b>}
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} phone={number} />
      ))}
    </ul>
  );
};

export default ContactList;
