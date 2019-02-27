import React from "react"
import {
  Link
} from 'react-router-dom'

const Home = () => {
  let links;
  if (localStorage.getItem("token") ){
      links = (
        <>
        <h3> Click to start a new game or training session. </h3>
          <Link to="/games/new"> New Game </Link>
          <Link to="/training/new"> New Training </Link>
        </>
    )}else{
      links = (
      <>
      <h3> Sign up or Log in to begin. </h3>
        <Link to="/signup"> Sign Up </Link> <br/>
        <Link to="/login"> Log In </Link>
      </>
    )}


  return (
      <div id="home-links">
        <h1> Welcome to your Chess Trainer! </h1>
        {links}
      </div>
  )
}

export default Home
