import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Layout from './components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Layout />
  </Provider>
);
