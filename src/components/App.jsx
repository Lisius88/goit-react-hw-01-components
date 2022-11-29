import '../index.css';
import user from './objects/user.json';
import stats from './objects/data.json';
import friends from './objects/friends.json';
import transactions from './objects/transactions.json';
import { User } from './UserItem/UserItem';
import { Stats } from './StatisticsList/StatisticsList';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionsList } from './TransactionsList/TransactionsList';

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

      <Stats stats={stats} title={'Upload Stats'} />

      <FriendsList friends={friends} />

      <TransactionsList transactions={transactions} />
    </div>
  );
};
