import React from "react"

const MoveList = props => {

  return (
    <ul>
      {props.game.moves.map(move => <li> {move} </li>)}
    </ul>
  )
}

export default MoveList
