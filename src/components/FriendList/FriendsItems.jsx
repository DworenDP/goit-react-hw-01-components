import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendsItems = ({ name, isOnline, avatar }) => (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatyar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendsItems.poropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
