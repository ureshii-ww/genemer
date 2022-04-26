import React, { Fragment } from 'react';
import GreetingsBlock from '../Containers/GreetingsBlock/GreetingsBlock';
import MainForm from '../Containers/MainForm/MainForm';

const MainPage = () => {
  return (
    <Fragment>
      <GreetingsBlock />
      <MainForm />
    </Fragment>
  );
};

export default MainPage;