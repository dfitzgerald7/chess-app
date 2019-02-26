
const addMove = currentPos => ({
  type: "ADD_MOVE", payload: currentPos
})

const gotoNextMove = moveNum => ({
  type: "GOTO_NEXT_MOVE"
})

const clearBoard = () => ({
  type: "CLEAR_BOARD"
})

// const saveGame = gameMoves => ({
//   return (dispatch => {
//     dispatch({type: "LOADING_GAME"})
//     return (
//       //post request with gameMoves
//     )
//   })
// })

export { addMove, gotoNextMove, clearBoard }
