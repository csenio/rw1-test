import './User.css';
import PropTypes from 'prop-types';

export const User = ({ avatar, name, lastName, phone, lastLogin }) => (
  <div className='User'>
    <img src={avatar} alt={`${name}-${lastName}`} />
    <div className='User-description'>
      <div>
        <p>
          <b>
            {name} {lastName}
          </b>
        </p>
        <p>☎️ {phone}</p>
      </div>
      <p>{lastLogin.toLocaleString()}</p>
    </div>
  </div>
);

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  lastLogin: PropTypes.instanceOf(Date),
};
