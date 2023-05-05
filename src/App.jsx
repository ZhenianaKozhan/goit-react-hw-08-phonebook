// import { AppBar } from 'components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import Layout from 'components/Layout';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Route>
      </Routes>
    </div>
  );
};
