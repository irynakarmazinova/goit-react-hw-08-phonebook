import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/filter/filter-actions';
import { getFilterValue } from '../../redux/filter/filter-selectors';

import s from './Filter.module.scss';

const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <div className={s.box}>
      <h2 className={s.title}>Contacts</h2>

      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={onChange}
          className={s.input}
        ></input>
      </label>
    </div>
  );
};
export default Filter;
