import { ProfileContainer, Stats } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes }, }) => {
    return <ProfileContainer>
  <div className="description">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <Stats>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </Stats>
</ProfileContainer>
}