import React, { Component } from "react"
// import { connect } from "react-redux"
import { signup } from "../actions/userActions"

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
    signup(this.state)
  }

  render() {
    console.log(this.props.isSignup)
    let email;
    if (this.props.isSignup) {
      email = <input type="text" value={this.state.email} onChange={this.onChange} name="email"/>
    }
    return (
      <form onSubmit={this.onSubmit}>
        {email}
        <input type="text" value={this.state.username} name="username" onChange={this.onChange}/>
        <input type="text" value={this.state.password} name="password" onChange={this.onChange}/>
        <input type="submit" />
      </form>
    )
  }
}

export default UserContainer
