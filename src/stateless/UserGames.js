
import React, {Component} from "react"
import GameVotes from "./GameVotes"

class UserGames extends Component {


  render(){
    return (
    <ul id="user-positions">
        {this.props.userGames.map((game, index) => (
          <button onClick={() => this.props.handleUserGameClick(game)} key={index}> Game {index+1} </button>
        ))}

    </ul>

  )}
}
export default UserGames
