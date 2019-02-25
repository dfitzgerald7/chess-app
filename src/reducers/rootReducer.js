import { combineReducers } from "redux";

const rootReducer = combineReducers({
  board: boardReducer
})

function boardReducer(state={
  currentMove: 0,
  positions: ["start"],
  gameIds: []}, action = {}){
  switch (action.type){
    case "ADD_MOVE":
      const newMove = state.currentMove + 1
      return {...state, currentMove: newMove, positions: [...state.positions, action.payload]}
    case "GOTO_MOVE":
      return {...state, currentMove: action.payload}
    case "CLEAR_BOARD":
      return {
        currentMove: 0,
        positions: ["start"],
        gameIds: []}
    default:
      return state
  }
}

export default rootReducer
