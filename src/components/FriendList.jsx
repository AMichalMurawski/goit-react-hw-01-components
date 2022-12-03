import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend, index) => (
        <li className="item" key={index}>
          <span className="status">{friend.isOnline}</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  isOnline: PropTypes.objectOf(PropTypes.bool.isRequired),
  avatar: PropTypes.objectOf(PropTypes.string.isRequired),
  name: PropTypes.objectOf(PropTypes.number.isRequired),
};
