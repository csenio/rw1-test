import PropTypes from 'prop-types';

export const SearchInput = ({ value, onChange }) => {
  const handleOnChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <input
      className='SearchInput'
      type='search'
      name='search'
      value={value}
      onChange={handleOnChange}
      placeholder='Search user by name'
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
