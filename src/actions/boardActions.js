
const addMove = currentPos => ({
  type: "ADD_MOVE", payload: currentPos
})

const gotoMove = position => ({
  type: "GOTO_MOVE", payload: position
})

const clearBoard = () => ({
  type: "CLEAR_BOARD"
})

const savePosition = boardObject => { /// hard coded user id in. CHANGE to DYNAMIC
  fetch("http://localhost:5000/games", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({game: {...boardObject, user_id: 1}})}
  ).then(resp => resp.json()).then(resp => console.log(resp))
}

const userPositions = userId => {
  return (dispatch => {
  fetch(`http://localhost:5000/users/${userId}/games`)
  .then(resp => resp.json()).then(resp => dispatch({type: "ADD_USER_GAMES", payload: resp}))
  })
}

export { addMove, gotoMove, clearBoard, savePosition, userPositions}
