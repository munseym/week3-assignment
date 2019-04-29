import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RentalList from './RentalList';

class App extends Component{
  render() {
    return (
      <div className="App">
        <RentalList />
      </div>
    );
  }
}

export default App;
