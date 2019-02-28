import React from "react"

const MoveList = props => {
  return (
    <>
      <h4> Move List </h4>
      <ol>
        {props.moves.map((move, index) => <li key={index}> {move} </li>)}
      </ol>
    </>
  )
}

export default MoveList
