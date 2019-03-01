import React from "react"
import {logout} from "../actions/userActions"
const NavBar = props => {
  return (
    <>
      <button onClick={() => props.history.push("/")} > Home </button>
      <button onClick={() => logout(props.history)} > Log Out </button>
    </> )
}

export default NavBar
