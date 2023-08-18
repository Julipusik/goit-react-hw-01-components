import { FriendItem } from "components/FriendItem/FriendItem";
import { Friends } from "./FriendList.styled";

export const FriendsList = ({ friends }) => {
    return <Friends>
            {friends.map(friend => {
                return <FriendItem friend={friend} key={friend.id} />
            })}
        </Friends>
}