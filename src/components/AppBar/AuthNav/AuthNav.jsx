import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <Link
        to="/login"
        style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}
      >
        Login
      </Link>
      <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
        SignUp
      </Link>
    </div>
  );
};

export default AuthNav;
