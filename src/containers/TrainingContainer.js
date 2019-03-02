import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"
import {addMove, userPositions, gotoMove, deletePosition} from "../actions/boardActions"
import {fetchGame, displayGame } from "../actions/trainingActions"
import UserGames from "../stateless/UserGames"
import InfoBar from "../stateless/InfoBar"
import MoveList from "../stateless/MovesList"
import Grid from "@material-ui/core/Grid"

import Chess from "chess.js";

const chess = new Chess();

class TrainingContainer extends Component {

  onDrop = moveObj => { //code from chessboardjsx
    // debugger;
    const move = chess.move({
      from: moveObj.sourceSquare,
      to: moveObj.targetSquare
    });
    if (move === null) return;   // illegal move
    // console.log(chess.fen())
    this.props.addMove(chess.fen())
  };

  handleClick = event => {
    console.log("pos", this.props.positions[this.props.currentMove])
    this.props.fetchGame(this.props.positions[this.props.currentMove])
  }

  displayGame = () => {
    this.props.displayGame(this.props.fetchedGame.gameId)
  }

  nextMove = () => {
    const {moves} = this.props.fetchedGame
    const newMove = moves[this.props.currentMove]
    chess.move(newMove)
    this.props.addMove(chess.fen())
  }

  handleUserGameClick = game => {
    chess.load(game.fen)
    this.props.gotoMove(game)
  }

  componentDidMount() {
    this.props.userPositions()
  }

  renderButton = () => {
    if (this.props.fetchedGame.moves.length !== 0) {
      return <button onClick={this.nextMove}> Next Move </button>
    } else if (this.props.fetchedGame.gameId) {
      return <button onClick={this.displayGame}> Display this game! </button>
    } else{
      return <button onClick={this.handleClick}> Find a game with the same opening! </button>
    }
  }

  render() {
    return (
      <Grid container spacing={24} justify="center">
        <Grid item s={6} >
          <InfoBar names={this.props.fetchedGame.names} gameId={this.props.gameId} deletePosition={this.props.deletePosition}/>
          <Chessboard position={this.props.positions[this.props.currentMove]} onDrop={this.onDrop} width="400"/>
          {this.renderButton()}
          <UserGames userGames={this.props.userGames} handleUserGameClick={this.handleUserGameClick} />
        </Grid>
        <Grid item s={6}>
          <MoveList moves={this.props.fetchedGame.moves} />
        </Grid>

      </Grid>
    )
  }

}

const mapStateToProps = state => ({
  positions: state.board.positions,
  fetchedGame: state.board.fetchedGame,
  currentMove: state.board.currentMove,
  names: state.board.names,
  userGames: state.user.games,
  gameId: state.board.gameId
})

export default connect(mapStateToProps, {addMove, fetchGame, displayGame, userPositions, gotoMove, deletePosition})(TrainingContainer)
