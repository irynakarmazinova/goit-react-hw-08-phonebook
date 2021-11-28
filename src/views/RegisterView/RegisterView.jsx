import { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import Title from '../../components/Title/Title';

import { register } from '../../redux/auth/auth-operations';

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

export default function RegisterView() {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(state));
  };

  return (
    <div className={s.box}>
      <Title title="This is register page." />

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={state.name}
            onChange={e =>
              setState({ type: e.target.name, payload: e.target.value })
            }
          />
        </label>

        <label>
          Email
          <input
            className={s.input}
            type="text"
            name="email"
            value={state.email}
            onChange={e =>
              setState({ type: e.target.name, payload: e.target.value })
            }
          />
        </label>

        <label>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={state.password}
            onChange={e =>
              setState({ type: e.target.name, payload: e.target.value })
            }
          />
        </label>

        <button type="submit" className={s.btn}>
          Register
        </button>
      </form>
    </div>
  );
}
