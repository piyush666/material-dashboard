import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import AboutUs from './AboutUs';
import { Grid } from '@material-ui/core';
import Navbar from './Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Grid container spacing={1}>
        <Grid container item xs={12} >
          <Navbar />
        </Grid>
        <Grid container item xs={12} >
          <Switch>
            <Route exact path='/'><App /></Route>
            <Route path='/contact'><Contact /></Route>
            <Route path='/aboutus'><AboutUs /></Route>
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
