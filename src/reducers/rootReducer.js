import { combineReducers } from "redux";
import boardReducer from "./boardReducer"

const rootReducer = combineReducers({
  fen: boardReducer
})

export default rootReducer
