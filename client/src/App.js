import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import { MuiThemeProvider } from '@material-ui/core';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <MuiThemeProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
