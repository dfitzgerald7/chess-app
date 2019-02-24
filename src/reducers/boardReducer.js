
function boardReducer(state={fen: ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"], gameIds: []}, action){
  switch (action.type){
    case "ADD_MOVE":
      return {...state, fen: [...state.fen, action.payload]}
    default:
      return state
  }
}
