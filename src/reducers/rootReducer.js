import { combineReducers } from "redux";

const rootReducer = combineReducers({
  board: boardReducer
})

function boardReducer(state={
  currentMove: 0,
  positions: ["start"],
  fetchedGame: {gameId: "", names: "", moves: [], fetchedCurrentMove: 0},
  gameIds: []}, action = {}){
  switch (action.type){
    case "ADD_MOVE":
      const newMove = state.currentMove + 1
      return {...state, currentMove: newMove, positions: [...state.positions, action.payload]}
    case "GOTO_NEXT_MOVE":
      return {...state, currentMove: action.payload}
    case "CLEAR_BOARD":
      return {
        ...state,
        currentMove: 0,
        positions: ["start"]}
    case "LOADING_GAME":
      return state
    case "FIND_GAME":
      const topGame = action.payload.topGames[0]
      const names = `${topGame.white.name} vs. ${topGame.black.name}`
      return {...state, fetchedGame: {gameId: topGame.id, names }}
    case "DISPLAY_GAME":
      const moveList = action.payload.split("\n").slice(-1)[0]
      const cleanMoveList = moveList.replace(/\d+\. /g, "").split(" ")
      return {...state, fetchedGame: {...state.fetchedGame, moves: cleanMoveList, displayMoves: moveList}}
    case "NEXT_FETCHED_GAME":
      const nextMove = state.fetchedGame.fetchedCurrentMove + 1
      return {...state, fetchedGame: {...state.fetchedGame, fetchedCurrentMove: nextMove}}
    default:
      return state
  }
}

// function trainingReducer(state={
//     names: "",
//     moves: [],
//     currentPos: "start"
//   }, action){
//     switch (action.type){
//     default:
//       return state
//     }
// }

export default rootReducer
