import React from "react"
import {
  Link
} from 'react-router-dom'

const Home = () => {
  return (
      <div id="home-links">
        <h1> Welcome to your Chess Trainer! </h1>
        <h3> Click to start a new game or training session. </h3>
        <Link to="/games/new"> New Game </Link> <br/>
        <Link to="/training/new"> New Training </Link>
      </div>
  )
}

export default Home
