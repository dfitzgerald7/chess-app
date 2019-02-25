import { combineReducers } from "redux";

const rootReducer = combineReducers({
  board: boardReducer
})

function boardReducer(state={
  currentMove: 0,
  positions: ["start"],
  fetchedGame: {gameId: "", names: "", moves: []},
  gameIds: []}, action = {}){
  switch (action.type){
    case "ADD_MOVE":
      if (state.positions[state.currentMove] !== action.payload){
        const newMove = state.currentMove + 1
        return {...state, currentMove: newMove, positions: [...state.positions, action.payload]}
      } else{
        return state
      }
    case "GOTO_MOVE":
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
      return {...state, fetchedGame: {...state.fetchedGame, moves: moveList}}
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
