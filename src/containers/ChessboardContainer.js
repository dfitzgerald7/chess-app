import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"
import {addMove, clearBoard, savePosition, userPositions, gotoMove} from "../actions/boardActions"
import Chess from "chess.js";

const chess = new Chess();

 class ChessboardContainer extends Component {

   state = {
     userGames: []
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
    savePosition({fen: chess.fen(), move_count: this.props.currentMove})
  }

  handleClick = game => {
    chess.load(game.fen)
    this.props.gotoMove(game)
  }

  componentDidMount() {
    this.props.userPositions(1)
  }

  render() {
    console.log(this.props)
    return (
      <>
        <h3> {this.props.turn} to move. </h3>
        <Chessboard position={this.props.positions[(this.props.currentMove)]}
          width="400"
          onDrop={this.onDrop}
          orientation={this.props.turn.toLowerCase()} />
        <button onClick={this.clearBoard}> New Game </button>
        <button onClick={this.handleSavePosition} > Save this position </button>
        <ul id="user-positions">
            {this.props.userGames.map((game, index) => (
              <button key={game.id} onClick={() => this.handleClick(game)}> Game {index+1} </button>))}
        </ul>
      </>
    )
  }

}

const mapStateToProps = state => ({
  positions: state.board.positions,
  currentMove: state.board.currentMove,
  turn: state.board.turn,
  userGames: state.user.games
})



export default connect(mapStateToProps, { addMove, clearBoard, savePosition, userPositions, gotoMove })(ChessboardContainer)
