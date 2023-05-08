import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUserEmail } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  return (
    <div>
      <p>{userEmail}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
