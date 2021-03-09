import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MovieContainer from './MovieContainer';
import MovieDescription from './MovieDescription';
import {BrowserRouter, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component= {MovieContainer} />
        <Route path="/Description/:title/:description/:video" component= {MovieDescription} />
      </BrowserRouter>
    );
  }
}

export default App;
