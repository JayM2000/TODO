import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import subm from './pages/storer/storers';
import { add_exp, edit } from './pages/actionsFiles/expp';
import { setext, sortamt } from './pages/actionsFiles/filtt';
import upda from './pages/selectors/sortt';
import { Provider as Prv } from 'react-redux';

const store = subm();

store.dispatch(add_exp({
  desc: 'anvbc',
  note: 'lajsk -->>> al@#!#',
  id: 208190,
  amt: 12089
}));

store.dispatch(add_exp({
  desc: 'are you bc',
  note: 'avengers assmemblers',
  id: 208190,
  amt: 230
}));

store.dispatch(setext('bc'));
store.dispatch(sortamt());

const dis = store.getState();
const fin = upda(dis.exp, dis.filter);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Prv store={store}><App /></Prv>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
