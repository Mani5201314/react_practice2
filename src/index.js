import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Use from './use';
import Inc from './increment';
import Date1 from './data';
import RunningTime from './timer';
import Fetch from './fetch';
import Ren from './loginpage';
import Json from './json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Use /> */}
    {/* <Inc /> */}
    {/* <Date1 /> */}
    {/* <RunningTime /> */}
    {/* <Fetch /> */}
    {/* <Ren /> */}
    <Json />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
