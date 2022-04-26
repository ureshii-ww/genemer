import React from 'react';
import PageTitle from '../../UI/PageTitle/PageTitle';
import { useGreetingsBlock } from './useGreetingsBlock';
import './greetings-block.scss'

const GreetingsBlock = () => {
  const { username } = useGreetingsBlock();

  return (
    <div className="greetings-block">
      <PageTitle greeting="Здравствуйте, " username={username} />
    </div>
  );
};

export default GreetingsBlock;