import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';

import { fetchContacts } from './redux/contacts/contacts-operations';

import { ContactsView } from './views/ContactsView/ContactsView';
import { RegisterView } from './views/RegisterView/RegisterView';
import { LoginView } from './views/LoginView/LoginView';
import { refreshUser } from './redux/auth/auth-operation';

import { Navigation } from './components/Navigation/Navigation';

import './App.scss';

export default function App() {
  const isLoading = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="visually_hidden">Phonebook</h1>

      <Navigation />

      <Routes>
        <Route path="register" element={<RegisterView />}></Route>
        <Route path="login" element={<LoginView />}></Route>
        <Route path="contacts" element={<ContactsView />}></Route>
      </Routes>

      {isLoading && <h1>Loading...</h1>}
    </div>
  );
}
// ---------------------------------------------------
// action.meta && action.meta.ga === action?.meta?.ga - необязатльный

// RTK redux toolkit query - для управления серверным состоянием из приложения

// query - get
