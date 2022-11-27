import '../index.css';
import user from '../components/objects/user.json';
import stats from '../components/objects/data.json';
import friends from '../components/objects/friends.json';
import transactions from '../components/objects/transactions.json';
import { User } from './user/user';
import { Stats } from './statistics/statistics';
import { FriendsList } from './friends/friends.list';
import { TransactionsList } from './transaction/transactions';

export const App = () => {
  return (
    <div>
      <User user={user} />

      <Stats stats={stats} />

      <FriendsList friends={friends} />

      <TransactionsList transactions={transactions} />
    </div>
  );
};
