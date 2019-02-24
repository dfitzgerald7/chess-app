import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"

class ChessboardContainer extends Component {

  render() {
    const moveNum = this.props.currentMove
    return <Chessboard position={this.props.fen[moveNum]} width="400"/>
  }
}

const mapStateToProps = state => ({
  fen: state.board.fen,
  currentMove: state.board.currentMove
})

export default connect(mapStateToProps)(ChessboardContainer)
