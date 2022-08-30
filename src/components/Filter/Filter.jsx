import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find a contact by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
