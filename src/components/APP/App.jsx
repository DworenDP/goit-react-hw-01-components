import React from 'react';

import { UserProfile } from 'components/UserProfile/User';
import user from '../UserProfile/user.json';

// import { Statistics } from 'components/Statistics/Statistics';
// import { UserProfile } from '../UserProfile/User';

export const App = () => {
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101',
  //     }}
  //   >
  //     {/* React homework template */}

  //   </div>
  // );
  return <UserProfile {...user} />;
};
