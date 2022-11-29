import '../index.css';
import user from '../components/objects/user.json';
import stats from '../components/objects/data.json';
import friends from '../components/objects/friends.json';
import transactions from '../components/objects/transactions.json';
import { User } from './User/User';
import { Stats } from './Statistics/Statistics';
import { FriendsList } from './Friends/Friends.list';
import { TransactionsList } from './Transaction/Transactions';

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
