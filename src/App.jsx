import { AppBar } from 'components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { RegisterView } from 'views/RegisterView';
import { LoginView } from 'views/LoginView';
import { ContactsView } from 'views/ContactsView';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Routes>
        <Route index path="/" Component={HomeView} />
        <Route path="/register" Component={RegisterView} />
        <Route path="/login" Component={LoginView} />
        <Route path="/contacts" Component={ContactsView} />
      </Routes>
    </div>
  );
}
