import React from 'react';
import ReactDOM from 'react-dom';

import './css/reset.css';
import './css/timeline.css';
import './css/login.css';

import App from './App';
import Login from './componentes/Login';

import { Router, Route, browserHistory } from 'react-router';

/*
  A função onEnter é do react-router que executa uma acao 
  ao acessar a url
*/
function verificaAutenticacao(nextState, replace) {
  if(localStorage.getItem('auth-token') === null) {
    replace('/?msg=Você precisa estar logado para acessar a timeline');
  }
}

ReactDOM.render(
  (
    <Router history={ browserHistory } >
        <Route path="/" component={ Login } />
        <Route path="/timeline" component={ App } onEnter={ verificaAutenticacao }/>
    </Router> 
  ),
  document.getElementById('root')
);
