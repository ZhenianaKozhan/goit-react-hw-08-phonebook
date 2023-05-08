import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { deleteContact } from 'redux/contacts/contacts-operation';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`Contact ${name} delete`);
  };

  return (
    <ListItem
      id={id}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={`${name}: ${phone}`} />
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
