import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import ChessboardContainer from "./containers/ChessboardContainer"
import TrainingContainer from "./containers/TrainingContainer"
import UserContainer from "./containers/UserContainer"
import NavBar from "./stateless/NavBar"
import Home from "./stateless/Home"

class App extends Component {
  render() {

    return (
        <div className="App">
            <Route path="/" component={NavBar} />
            <div className = 'container'>
              <Route exact path="/" component={Home}/>
              <Route path="/games/new" component={ChessboardContainer}/>
              <Route exact path="/games" component={TrainingContainer}/>
              <Route path="/signup" render={(props) => <UserContainer {...props} isSignup={true} />}/>
              <Route path="/login" render={(props) => <UserContainer {...props} isSignup={false} />}/>
            </div>
            <div id='footer'> Copyright Doug Fitzgerald </div>
        </div>
    
    );
  }
  // componentDidUpdate() {
  //   debugger;
  // }
}

export default App;
