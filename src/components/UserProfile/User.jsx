// import user from '../UserProfile/';
// const user = require('./')
import user from '../../json/user.json';

export const UserProfile = () => {
  return user.map(info => {
    return (
      <div class="profile">
        <div class="description">
          <img src={info.avatar} alt="User avatar" class="avatar" />
          <p class="name">{info.username}</p>
          <p class="tag">@{info.tag}</p>
          <p class="location">{location}</p>
        </div>

        <ul class="stats">
          <li>
            <span class="label">Followers</span>
            <span class="quantity">{info.stats.followers}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="quantity">{info.stats.views}</span>
          </li>
          <li>
            <span class="label">{info.stats.likes}</span>
            <span class="quantity">3000</span>
          </li>
        </ul>
      </div>
    );
  });
};
