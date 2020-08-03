import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import Gallery from './components/gallery/Gallery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const theme = createMuiTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/gallery' component={Gallery} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
