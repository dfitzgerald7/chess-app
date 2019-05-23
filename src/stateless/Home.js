import React from "react"
import {connect} from "react-redux"
import {Link} from 'react-router-dom'

const Home = props => {
  let links;
  if (localStorage.getItem("token") ){
      links = (
        <>
        <h3> Click to start a new game or training session. </h3>
          <Link to="/games/new"> New Game </Link> <br/>
          <Link to="/games"> New Training </Link> <br/>
        </>
    )}else{
      links = (
      <>
        <h3> Sign up or Log in to begin. </h3>
        <Link to="/signup"> Sign Up </Link> <br/> <br/>
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

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps)(Home)
