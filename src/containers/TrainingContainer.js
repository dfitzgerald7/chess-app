import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"
import {addMove} from "../actions/boardActions"
import {fetchGame, displayGame } from "../actions/trainingActions"
import InfoBar from "../stateless/InfoBar"

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
    this.props.fetchGame(this.props.positions[this.props.currentMove])
  }

  displayGame = () => {
    this.props.displayGame(this.props.fetchedGame.gameId)
  }

  render() {
    return (
      <>
        <InfoBar names={this.props.fetchedGame.names} />
        <Chessboard position={this.props.positions[this.props.currentMove]} onDrop={this.onDrop} width="400"/>
        <button onClick={this.handleClick}> Find a game with the same opening! </button>
        <button onClick={this.displayGame}> Display this game! </button>
      </>
    )
  }

}

const mapStateToProps = state => ({
  positions: state.board.positions,
  fetchedGame: state.board.fetchedGame,
  currentMove: state.board.currentMove,
  names: state.board.names
})

export default connect(mapStateToProps, {addMove, fetchGame, displayGame})(TrainingContainer)
