import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chessboard from "chessboardjsx"

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Chessboard position="start"/>
        </header>
      </div>
    );
  }
}

export default App;
