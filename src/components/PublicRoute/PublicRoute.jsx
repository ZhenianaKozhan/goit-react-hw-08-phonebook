import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/contacts" />;
};

export default PublicRoute;
