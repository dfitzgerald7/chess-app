import React from "react"
import {logout} from "../actions/userActions"
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
const NavBar = props => {
  let logoutButton;
  if (localStorage.getItem("token")){
    logoutButton = <Button onClick={() => logout(props.history)} > Log Out </Button>
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Button onClick={() => props.history.push("/")} > Home </Button>
        {logoutButton}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
