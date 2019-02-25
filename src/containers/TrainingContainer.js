import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"
import {addMove} from "../actions/boardActions"
import fetchGame from "../actions/trainingActions"
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
    this.fetchGame(this.props.positions[this.props.currentMove])
  }


  render() {
    return (
      <>
        <InfoBar names={this.props.names} />
        <Chessboard position={this.props.positions[this.props.currentMove]} onDrop={this.onDrop} width="400"/>
        <button onClick={this.handleClick}> Find a game with the same opening! </button>
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

export default connect(mapStateToProps, {addMove, fetchGame})(TrainingContainer)
