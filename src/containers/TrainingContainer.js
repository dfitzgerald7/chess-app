import React, { Component } from "react"
import Chessboard from "chessboardjsx"
import { connect } from "react-redux"
import {addMove, userPositions, gotoMove} from "../actions/boardActions"
import {fetchGame, displayGame } from "../actions/trainingActions"
import InfoBar from "../stateless/InfoBar"
import MoveList from "../stateless/MovesList"

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
      return (
        <>
        <button onClick={this.nextMove}> Next Move </button>
        <MoveList moves={this.props.fetchedGame.moves} />
        </>
      )
    } else if (this.props.fetchedGame.gameId) {
      return <button onClick={this.displayGame}> Display this game! </button>
    } else
    return <button onClick={this.handleClick}> Find a game with the same opening! </button>
  }

  render() {
    return (
      <>
        <InfoBar names={this.props.fetchedGame.names} />
        <Chessboard position={this.props.positions[this.props.currentMove]} onDrop={this.onDrop} width="400"/>
        {this.renderButton()}
        <ul id="user-positions">
            {this.props.userGames.map((game, index) => (
              <button key={game.id} onClick={() => this.handleUserGameClick(game)}> Game {index+1} </button>))}
        </ul>


      </>
    )
  }

}

const mapStateToProps = state => ({
  positions: state.board.positions,
  fetchedGame: state.board.fetchedGame,
  currentMove: state.board.currentMove,
  names: state.board.names,
  userGames: state.user.games
})

export default connect(mapStateToProps, {addMove, fetchGame, displayGame, userPositions, gotoMove})(TrainingContainer)
