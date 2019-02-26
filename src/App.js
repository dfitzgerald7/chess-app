import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import ChessboardContainer from "./containers/ChessboardContainer"
import TrainingContainer from "./containers/TrainingContainer"
import UserContainer from "./containers/UserContainer"
import Home from "./stateless/Home"

class App extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Route exact path="/" component={Home}/>
            <Route path="/games/new" component={ChessboardContainer}/>
            <Route path="/training/new" component={TrainingContainer}/>
            <Route path="/signup" render={(props) => <UserContainer {...props} isSignup={true} />}/>
            <Route path="/login" render={(props) => <UserContainer {...props} isSignup={false} />}/>
          </header>
        </div>
    );
  }
}

export default App;
