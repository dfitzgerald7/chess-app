import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"
import {addMove, clearBoard} from "../actions/boardActions"
import Chess from "chess.js";

const chess = new Chess();

 class ChessboardContainer extends Component {
//
  onDrop = moveObj => { //code from chessboardjsx
    // debugger;
    const move = chess.move({
      from: moveObj.sourceSquare,
      to: moveObj.targetSquare
    });
    if (move === null) return;   // illegal move
    this.props.addMove(chess.fen())
  };

  handleDrop = event => {

  }

  // gotoMove = num => {
  //
  //   this.props.gotoMove(num)
  // }

  clearBoard = () => {
    chess.reset()
    this.props.clearBoard()
  }

  render() {
    return (
      <>
        <Chessboard position={this.props.positions[(this.props.currentMove)]} width="400" onDrop={this.onDrop} />
        <button onClick={this.clearBoard}> Clear </button>
      </>
    )
  }

}

const mapStateToProps = state => ({
  positions: state.board.positions,
  currentMove: state.board.currentMove
})



export default connect(mapStateToProps, { addMove, clearBoard })(ChessboardContainer)
