import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AppClass from "./AppClass";
import Data from './Components/DataComponent'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={Data}/>   
  </React.StrictMode>
);