import PropTypes from 'prop-types';
import { FriendsItems } from './FriendsItems';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <FriendsItems
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      ></FriendsItems>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
