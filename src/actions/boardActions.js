
const addMove = currentPos => ({
  type: "ADD_MOVE", payload: currentPos
})

const gotoNextMove = moveNum => ({
  type: "GOTO_NEXT_MOVE"
})

const clearBoard = () => ({
  type: "CLEAR_BOARD"
})

const savePosition = boardObject => {
  fetch("http://localhost:5000/games", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({game: boardObject})}
  ).then(resp => resp.json()).then(resp => console.log(resp))
}

export { addMove, gotoNextMove, clearBoard, savePosition}
