import PropTypes from 'prop-types';

export const EmptyUsersList = ({ message }) => (
  <p style={{ textAlign: 'center' }}>{message ?? 'There are no users!'}😔</p>
);

EmptyUsersList.propTypes = {
  message: PropTypes.string,
};
