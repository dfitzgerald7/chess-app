import React, { Component } from "react"
import { connect } from "react-redux"
import { signup, login } from "../actions/userActions"

class UserContainer extends Component {
  state = {
    username: "username",
    password: "password",
    email: "email"
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    // this.props.signup(this.state)
    this.props.login(this.state)
  }

  render() {
    let username;
    if (this.props.isSignup) {
      username = <input type="text" value={this.state.username} name="username" onChange={this.onChange}/>

    }
    return (
      <form onSubmit={this.onSubmit}>
        {username}
        <input type="text" value={this.state.email} onChange={this.onChange} name="email"/>
        <input type="text" value={this.state.password} name="password" onChange={this.onChange}/>
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { signup, login })(UserContainer)
