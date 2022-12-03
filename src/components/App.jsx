import { Profile } from './Profile';
import user from './json/user.json';
import { Statistics } from './Statistics';
import statistics from './json/statistics.json';
import { FriendList } from './FriendList';
import friends from './json/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from './json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
