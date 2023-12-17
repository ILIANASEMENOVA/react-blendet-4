import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/sliceFilter';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={e => dispatch(changeFilter(e.target.value))}
    />
  );
};
