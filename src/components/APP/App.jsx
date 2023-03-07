import React from 'react';

import { UserProfile } from 'components/UserProfile/User';
import user from '../UserProfile/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from '../Statistics/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from '../FriendList/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <UserProfile {...user} />;
      <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
