
import React, {Component} from "react"

class GameVotes extends Component {

  state = {
    votes: 0
  }

  addLike = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }


  render() {
    return (
      <>
        <button key={this.props.game.id} onClick={() => this.props.handleUserGameClick(this.props.game)}> Game {this.props.index+1} </button>
        <button onClick={this.addLike} > Like </button>
        <p> {this.state.votes } </p>
      </>
  )
  }
}

export default GameVotes
