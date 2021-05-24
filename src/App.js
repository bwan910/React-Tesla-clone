import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './components/Page';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/page">
            <Page></Page>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
