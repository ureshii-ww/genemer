import React, { Fragment } from 'react';
import GreetingsBlock from '../Containers/GreetingsBlock/GreetingsBlock';
import MainForm from '../Containers/MainForm/MainForm';
import StatusBlock from '../Containers/StatusBlock/StatusBlock';

const MainPage = () => {
  return (
    <Fragment>
      <GreetingsBlock />
      <StatusBlock />
      <MainForm />
    </Fragment>
  );
};

export default MainPage;