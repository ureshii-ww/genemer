import React from 'react';
import PageTitle from '../../UI/PageTitle/PageTitle';
import { useGreetingsBlock } from './useGreetingsBlock';

const GreetingsBlock = () => {
  const { username } = useGreetingsBlock();

  return (
    <div>
      <PageTitle greeting="Здравствуйте, " username={username} />
    </div>
  );
};

export default GreetingsBlock;