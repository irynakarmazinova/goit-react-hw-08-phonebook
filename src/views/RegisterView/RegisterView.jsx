import { useReducer } from 'react';
import { useDispatch } from 'react-redux';

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
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            autoFocus
            className={s.input}
            type="text"
            name="name"
            value={state.name}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Please check the correctness of the entered data."
            placeholder="name"
            onChange={e =>
              setState({ type: e.target.name, payload: e.target.value })
            }
            required
          />
        </label>

        <label>
          Email
          <input
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
            required
          />
        </label>

        <label>
          Password
          <input
            autoComplete="off"
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
          Register
        </button>
      </form>
    </div>
  );
}
