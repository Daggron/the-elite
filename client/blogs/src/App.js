import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector(state=>state.theme)
  return (
    <div className={[theme]}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
