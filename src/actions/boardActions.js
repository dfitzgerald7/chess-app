
const addMove = currentPos => ({
  type: "ADD_MOVE", payload: currentPos
})

const gotoNextMove = moveNum => ({
  type: "GOTO_NEXT_MOVE"
})

const clearBoard = () => ({
  type: "CLEAR_BOARD"
})

export { addMove, gotoNextMove, clearBoard }
