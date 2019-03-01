import React from "react"

const InfoBar = props => {

  if (props.gameId){
    return (
      <>
        <button onClick={() => props.deletePosition(props.gameId)} > Delete this game </button>
      </>
    )
  }
  else {
    return (
      <>
        <h3> Use the Lichess database to find games with a position. </h3>
        <h4> {props.names} </h4>
      </>
  )}
}

export default InfoBar
