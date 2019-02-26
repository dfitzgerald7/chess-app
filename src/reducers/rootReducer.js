import { combineReducers } from "redux";

const rootReducer = combineReducers({
  board: boardReducer,
  user: userReducer
})

function boardReducer(state={
  currentMove: 0,
  positions: ["start"],
  turn: "White",
  fetchedGame: {gameId: "", names: "", moves: [], fetchedCurrentMove: 0},
  gameIds: []}, action = {}){
  switch (action.type){
    case "ADD_MOVE":
      const newMove = state.currentMove + 1
      let newTurn = newMove % 2 === 0 ? "White" : "Black"
      return {...state, currentMove: newMove, positions: [...state.positions, action.payload], turn: newTurn}
    case "GOTO_NEXT_MOVE":
      return {...state, currentMove: action.payload}
    case "CLEAR_BOARD":
      return {
        ...state,
        currentMove: 0,
        turn: "White",
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

function userReducer(state={
    userId: "",
    games: []
  }, action){
    switch (action.type){
    case ("ADD_USER_GAMES"):
      let posArr = [];
      action.payload.forEach(game => posArr.push(game))
      return {...state, games: posArr}
    default:
      return state
    }
}

export default rootReducer
