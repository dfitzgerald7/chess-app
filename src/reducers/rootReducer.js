import { combineReducers } from "redux";

const rootReducer = combineReducers({
  board: boardReducer
})

function boardReducer(state={
  currentMove: 0,
  fen: ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"],
  gameIds: []}, action = {}){
  switch (action.type){
    case "ADD_MOVE":
      const newMove = state.currentMove + 1
      return {...state, currentMove: newMove, fen: [...state.fen, action.payload]}
    default:
      return state
  }
}

export default rootReducer
