import React, { Component } from 'react';
import './App.css';
import {Route, Redirect} from 'react-router-dom'
import ChessboardContainer from "./containers/ChessboardContainer"
import TrainingContainer from "./containers/TrainingContainer"
import UserContainer from "./containers/UserContainer"
import {logout} from "./actions/userActions"
import NavBar from "./stateless/NavBar"
import Home from "./stateless/Home"

class App extends Component {
  render() {

    return (
        <div className="App">
          <header className="App-header">
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={Home}/>
            <Route path="/games/new" component={ChessboardContainer}/>
            <Route exact path="/games" component={TrainingContainer}/>
            <Route path="/signup" render={(props) => <UserContainer {...props} isSignup={true} />}/>
            <Route path="/login" render={(props) => <UserContainer {...props} isSignup={false} />}/>
          </header>
        </div>
    );
  }
  // componentDidUpdate() {
  //   debugger;
  // }
}

export default App;
