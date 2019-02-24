
const addMove = currentPos => ({
  type: "ADD_MOVE", payload: currentPos
})

const gotoMove = moveNum => ({
  type: "GOTO_MOVE", payload: moveNum
})

const clearBoard = () => ({
  type: "CLEAR_BOARD"
})

export { addMove, gotoMove, clearBoard }
