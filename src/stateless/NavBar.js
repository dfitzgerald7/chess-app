import React from "react"
import {logout} from "../actions/userActions"
const NavBar = props => {
  let buttons = [<button onClick={() => props.history.push("/")} > Home </button>]
  if (localStorage.getItem("token")){
    buttons.push (<button onClick={() => logout(props.history)} > Log Out </button>)
  }
  return null
}

export default NavBar
