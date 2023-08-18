import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from "../json/user.json";
import data from "../json/data.json";
import friends from "../json/friends.json";
import transactions from "../json/transactions.json";

export const App = () => {
  return (
    <>
      <div className="profile-container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      </div>
      
      <TransactionHistory items={transactions}/>
    </>
  );
};