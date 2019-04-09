
import React, {Component} from "react"
import GameVotes from "./GameVotes"

class UserGames extends Component {


  render(){
    return (
    <ul id="user-positions">
        {this.props.userGames.map((game, index) => (
          <GameVotes game={game} index={index}/>
        ))}

    </ul>

  )}
}
export default UserGames
