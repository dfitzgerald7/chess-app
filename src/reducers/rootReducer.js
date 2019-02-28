import { combineReducers } from "redux";

const rootReducer = combineReducers({
  board: boardReducer,
  user: userReducer
})

function boardReducer(state={
  currentMove: 0,
  positions: ["start"],
  turn: "White",
  fetchedGame: {gameId: "", names: "", moves: [], fetchedCurrentMove: 0}}, action = {}){ // might delete gameIds from here
  switch (action.type){
    case "ADD_MOVE":
      const newMove = state.currentMove + 1
      let newTurn = state.turn === "Black" ? "White" : "Black"
      return {...state, currentMove: newMove, positions: [...state.positions, action.payload], turn: newTurn}
    case "GOTO_MOVE":
    console.log(action.payload)
      const {move_count, fen} = action.payload
      let turn = move_count % 2 === 0 ? "White" : "Black"
      let posArr = [];
      for (let i=0; i <= move_count; i++) {posArr.push(fen)}
      return {...state, positions: posArr, currentMove: move_count, turn: turn }
      //very hacky, if i saved the full array I could use current move but I
      //have to reset it to 0
    case "CLEAR_BOARD":
      return {
        ...state,
        currentMove: 0,
        turn: "White",
        positions: ["start"]}
    case "LOADING_GAME":
      return state
    case "FIND_GAME":
      if (action.payload.averageRating === 0){
        alert("No games found.")
        return state
      } else {
      const topGame = action.payload.topGames[0]
      const names = `${topGame.white.name} vs. ${topGame.black.name}`
      return {...state, fetchedGame: {...state.fetchedGame, gameId: topGame.id, names }}}
    case "DISPLAY_GAME":
      const moveList = action.payload.split("\n").slice(-1)[0]
      const cleanMoveList = moveList.replace(/\d+\. /g, "").split(" ")
      const moveNum = cleanMoveList.length
      return {...state, fetchedGame: {...state.fetchedGame, moves: cleanMoveList, displayMoves: moveList, fetchedCurrentMove: moveNum}}
    case "NEXT_FETCHED_GAME":
      const nextMove = state.fetchedGame.fetchedCurrentMove + 1
      return {...state, fetchedGame: {...state.fetchedGame, fetchedCurrentMove: nextMove}}
    default:
      return state
  }
}

function userReducer(state={
    games: []
  }, action){
    switch (action.type){
    case ("ADD_USER_GAMES"):
      let posArr = [];
      action.payload.forEach(game => posArr.push(game))
      return {...state, games: posArr}
    case ("ADD_SAVED_GAME"): //TODO
      // const newArr = state.games.push(action.payload)
      return {games: [...state.games, action.payload]}
    default:
      return state
    }
}

export default rootReducer
