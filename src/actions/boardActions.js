
const addMove = currentPos => ({
  type: "ADD_MOVE", payload: currentPos
})

const gotoMove = position => ({
  type: "GOTO_MOVE", payload: position
})

const clearBoard = () => ({
  type: "CLEAR_BOARD"
})

const savePosition = boardObject => {
  return dispatch =>
    fetch("http://localhost:5000/games", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({game: boardObject})}
    ).then(resp => resp.json()).then(resp =>{
      dispatch({type: "ADD_SAVED_GAME", payload: resp})})
}

const userPositions = userId => {
  return dispatch =>
    fetch(`http://localhost:5000/games`, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(resp => resp.json()).then(resp => dispatch({type: "ADD_USER_GAMES", payload: resp}))
}

 const deletePosition = gameId => {
   console.log("deletePosition")
   return dispatch =>
    fetch(`http://localhost:5000/games/${gameId}`, {
      method: "DELETE",
      headers:{
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
      // body: JSON.stringify({id: gameId})
    }).then(resp => resp.json()).then(resp => dispatch({type: "DELETE_GAME", payload: resp}))
 }

export { addMove, gotoMove, clearBoard, savePosition, userPositions, deletePosition}
