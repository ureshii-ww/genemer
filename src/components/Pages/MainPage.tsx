import React from 'react';
import GreetingsBlock from '../Containers/GreetingsBlock/GreetingsBlock';
import MainForm from '../Containers/MainForm/MainForm';
import StatusTooltip from '../Containers/StatusBlock/StatusTooltip';
import './main-page.scss'

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__container">
        <header className="main-page__header">
          <GreetingsBlock />
          <StatusTooltip />
        </header>
        <main className="main-page__content">
          <MainForm />
        </main>
      </div>
    </div>
  );
};

export default MainPage;