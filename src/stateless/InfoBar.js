import React from "react"
import {deletePosition} from "../actions/boardActions"
const InfoBar = props => {
  const deleteGame = () => {
    deletePosition(props.gameId)
  }

  if (props.gameId){
    return (
      <>
        <h3> {props.names} </h3>
        <button onClick={deleteGame} > Delete this game </button>
      </>
    )
  }
  else {
    return <h3> Use the Lichess database to find games with a position. </h3>
  }
}

export default InfoBar
