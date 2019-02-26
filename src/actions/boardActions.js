
const addMove = currentPos => ({
  type: "ADD_MOVE", payload: currentPos
})

const gotoNextMove = moveNum => ({
  type: "GOTO_NEXT_MOVE"
})

const clearBoard = () => ({
  type: "CLEAR_BOARD"
})

const saveGame = gameMoves => ({
  return (dispatch) => {
    dispatch({type: "SAVING_GAME"})
    return (
      fetch("http://localhost:5000/")
    )
  })
})

export { addMove, gotoNextMove, clearBoard }
