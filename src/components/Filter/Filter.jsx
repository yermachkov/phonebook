import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filterState = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="filter">Find a contact by name</label>
      <Input
        type="text"
        name="filter"
        id="filter"
        value={filterState}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </>
  );
};
