import React, { Component } from "react"

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
    
  }

  render() {
    let email;
    if (this.props.isSignup) {
      email = <input type="text" value={this.state.email} onChange={this.onChange} name="email"/>
    }
    return (
      <form onSubmit={this.props.onSubmit}>
        {email}
        <input type="text" value={this.state.username} name="username"/>
        <input type="text" value={this.state.password} name="password"/>
        <input type="submit" />
      </form>
    )
  }
}

export default UserContainer
