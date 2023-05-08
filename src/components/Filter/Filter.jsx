import { FilterForm } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'redux/filtersSlice';
import { selectFilter } from 'redux/contacts/contacts-selectors';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChangeFilter = e => dispatch(setFilters(e.target.value));

  return (
    <FilterForm>
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </FilterForm>
  );
};

export default Filter;
