import React, { useEffect, useState } from 'react';

import { BoardLayout } from '../layouts';

const BoardPage: React.FC = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(true);
  }, []);

  // eslint-disable-next-line no-console
  console.log(user);

  return <BoardLayout />;
};

export default BoardPage;
