import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"
import {addMove} from "../actions/boardActions"

class TrainingContainer extends Component {

  render() {
    return (
      <Chessboard position={this.props.positions}/>

    )
  }

}

const mapStateToProps = state => ({
  positions: state.board.positions,
  currentMove: state.board.currentMove
})

export default connect(mapStateToProps, {addMove})(TrainingContainer)
