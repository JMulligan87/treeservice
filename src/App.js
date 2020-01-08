import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { MuiThemeProvider } from '@material-ui/core';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Home />
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
