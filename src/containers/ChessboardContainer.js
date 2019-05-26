import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"
import {addMove, clearBoard, savePosition, gotoMove} from "../actions/boardActions"
import Chess from "chess.js";

const chess = new Chess();

 class ChessboardContainer extends Component {

  onDrop = moveObj => { //code from chessboardjsx
    // debugger;
    const move = chess.move({
      from: moveObj.sourceSquare,
      to: moveObj.targetSquare
    });
    if (move === null) return;   // illegal move
    if (chess.game_over()){
      alert(`${this.props.turn} wins!` )
      this.clearBoard()
    } else {
      this.props.addMove(chess.fen())
    }
  };

  clearBoard = () => {
    chess.reset()
    this.props.clearBoard()
  }

  handleSavePosition = () => {
    this.props.savePosition({fen: chess.fen(), move_count: this.props.currentMove})
  }


  render() {
    return (
      <>
        <h3> {this.props.turn} to move. </h3>
        <div id='gameBoard'>
          <Chessboard position={this.props.positions[(this.props.currentMove)]}
            width="400"
            onDrop={this.onDrop}
            orientation={this.props.turn.toLowerCase()} />
        </div>
        <button onClick={this.clearBoard}> New Game </button>
        <button onClick={this.handleSavePosition} > Save this position </button>
      </>
    )
  }

  componentWillUnmount() {
    console.log("unmount")
    this.clearBoard();
  }

}

const mapStateToProps = state => ({
  positions: state.board.positions,
  currentMove: state.board.currentMove,
  turn: state.board.turn
})



export default connect(mapStateToProps, { addMove, clearBoard, savePosition, gotoMove })(ChessboardContainer)
