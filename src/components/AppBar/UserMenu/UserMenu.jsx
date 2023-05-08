import { Button, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUserEmail } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  return (
    <div>
      <Chip label={userEmail} style={{ marginRight: '10px', color: 'white' }} />
      <Button variant="contained" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </div>
  );
};

export default UserMenu;
