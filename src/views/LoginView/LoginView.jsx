import { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth-operation';

import s from './LoginView.module.scss';

const initialState = {
  email: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'email':
      return { ...state, [action.type]: action.payload };

    case 'password':
      return { ...state, [action.type]: action.payload };

    default:
      return state;
  }
}

export function LoginView() {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(state));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="email"
        password="email"
        value={state.email}
        onChange={e =>
          setState({ type: e.target.name, payload: e.target.value })
        }
      />
      <input
        className={s.input}
        type="password"
        password="password"
        value={state.password}
        onChange={e =>
          setState({ type: e.target.name, payload: e.target.value })
        }
      />
      <button type="submit" className={s.btn}>
        Login
      </button>
    </form>
  );
}
