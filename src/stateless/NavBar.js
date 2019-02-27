import React from "react"
import {logout} from "../actions/userActions"
const NavBar = props => {
  console.log("history", props.history)
  if (localStorage.getItem("token")){
    return <button onClick={() => logout(props.history)} > Log Out </button>
  } else {
    return null
  }
}

export default NavBar
