import '../index.css';
import user from './objects/user.json';
// import stats from './objects/data.json';
// import friends from './objects/friends.json';
// import transactions from './objects/transactions.json';
import { User } from './user/user';
// import { Stats } from './Statistics/Statistics';
// import { FriendsList } from './Friends/Friends.list';
// import { TransactionsList } from './Transaction/Transactions';

export const App = () => {
  return (
    <div>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* <Stats stats={stats} title={'Upload Stats'} />

      <FriendsList friends={friends} />

      <TransactionsList transactions={transactions} /> */}
    </div>
  );
};
