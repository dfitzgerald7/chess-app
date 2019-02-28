
import React from "react"

const UserGames = props => {
  return (
    <ul id="user-positions">
        {props.userGames.map((game, index) => (
          <button key={game.id} onClick={() => props.handleUserGameClick(game)}> Game {index+1} </button>))}
    </ul>
  )
}

export default UserGames
