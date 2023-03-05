// import user from '../UserProfile/';
// const user = require('./')
// import user from '../../json/user.json';
import user from './User.json';

export const UserProfile = () => {
  return user.map(info => {
    return (
      <div className="profile">
        <div className="description">
          <img src={info.avatar} alt="User avatar" className="avatar" />
          <p className="name">{info.username}</p>
          <p className="tag">@{info.tag}</p>
          <p className="location">{info.location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{info.stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{info.stats.views}</span>
          </li>
          <li>
            <span className="label">likes</span>
            <span className="quantity">{info.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  });
};
