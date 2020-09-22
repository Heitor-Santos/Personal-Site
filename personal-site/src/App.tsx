import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
