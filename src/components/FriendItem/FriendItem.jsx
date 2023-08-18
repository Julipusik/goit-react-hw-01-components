import { Item } from "./FriendItem.styled";

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
    return <Item>
        <span className={isOnline ? 'offline' : 'online'}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </Item>
}