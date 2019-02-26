import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"
import {addMove, clearBoard} from "../actions/boardActions"
import Chess from "chess.js";

const chess = new Chess();

 class ChessboardContainer extends Component {

   state = {
     status: "White to move."
   }
//
  onDrop = moveObj => { //code from chessboardjsx
    // debugger;
    const move = chess.move({
      from: moveObj.sourceSquare,
      to: moveObj.targetSquare
    });
    if (move === null) return;   // illegal move
    if (chess.game_over()){
      alert(`${this.props.turn} wins!` )
    }
    this.props.addMove(chess.fen())
  };


  clearBoard = () => {
    chess.reset()
    this.props.clearBoard()
  }

  saveGame = () => {
    this.props.saveGame({fen: chess.fen(), move_count: this.props.currentMove})
  }

  render() {
    return (
      <>
        <h3> {this.props.turn} to move. </h3>
        <Chessboard position={this.props.positions[(this.props.currentMove)]} width="400" onDrop={this.onDrop} />
        <button onClick={this.clearBoard}> New Game </button>
        <button onClick={this.saveGame} > Save this position </button>
      </>
    )
  }

}

const mapStateToProps = state => ({
  positions: state.board.positions,
  currentMove: state.board.currentMove,
  turn: state.board.turn
})



export default connect(mapStateToProps, { addMove, clearBoard })(ChessboardContainer)
