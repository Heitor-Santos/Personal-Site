import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'fontsource-roboto';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/projects" exact={true} component={Projects} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
