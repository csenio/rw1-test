import PropTypes from 'prop-types';

export const ListItem = ({ children }) => {
  return <li className='App-item'>{children}</li>;
};

ListItem.propTypes = {
  children: PropTypes.element.isRequired,
};
