import { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/auth-operation';

import s from './RegisterView.module.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, [action.type]: action.payload };

    case 'email':
      return { ...state, [action.type]: action.payload };

    case 'password':
      return { ...state, [action.type]: action.payload };

    default:
      return state;
  }
}

export function RegisterView() {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(state));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="name"
        value={state.name}
        onChange={e =>
          setState({ type: e.target.name, payload: e.target.value })
        }
      />
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
        Register
      </button>
    </form>
  );
}
