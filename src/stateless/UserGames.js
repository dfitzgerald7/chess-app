
import React, {Component} from "react"

class UserGames extends Component {


  render(){
    return (
    <ul id="user-positions">
        {this.props.userGames.map((game, index) => (
          <p> {index}. {game} </p>
        ))}

    </ul>

  )}
}
export default UserGames
