import { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/auth/auth-operations';

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

export default function LoginView() {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(state));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            autoFocus
            className={s.input}
            type="text"
            name="email"
            value={state.email}
            pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
            title="Please check the entered data is correct."
            placeholder="email"
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
            placeholder="password"
            onChange={e =>
              setState({ type: e.target.name, payload: e.target.value })
            }
          />
        </label>

        <button type="submit" className={s.btn}>
          Login
        </button>
      </form>
    </div>
  );
}
