import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"
import {addMove, gotoMove, clearBoard} from "../actions/boardActions"

class ChessboardContainer extends Component {

  handleMove = event => {
    this.props.addMove(event)
  }

  gotoMove = num => {
    this.props.gotoMove(num)
  }

  clearBoard = () => {
    this.props.clearBoard()
  }

  render() {
    const moveNum = this.props.currentMove
    return (
      <>
        <Chessboard position="start" width="400" getPosition={this.handleMove}/>
        <button onClick={this.clearBoard}> Clear </button>
        <button onClick={() => this.gotoMove(1)}> Go to move 2  </button>
      </>
    )
  }

}

const mapStateToProps = state => ({
  positions: state.board.positions,
  currentMove: state.board.currentMove
})

export default connect(mapStateToProps, { addMove, gotoMove, clearBoard })(ChessboardContainer)
