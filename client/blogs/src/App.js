import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
