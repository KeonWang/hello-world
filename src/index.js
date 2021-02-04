import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from "./Layout";
import App from './App'; //引入App
import Progress from './Progress'


const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到了1112223344525";
}


ReactDOM.render(
    <div>
      <App />
    </div>,
    document.getElementById('root')
);