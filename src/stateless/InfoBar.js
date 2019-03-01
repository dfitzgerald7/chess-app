import React from "react"

const InfoBar = props => {

  if (props.gameId){
    return (
      <>
        <h3> {props.names} </h3>
        <button onClick={() => props.deletePosition(props.gameId)} > Delete this game </button>
      </>
    )
  }
  else {
    return <h3> Use the Lichess database to find games with a position. </h3>
  }
}

export default InfoBar
