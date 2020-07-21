import React from 'react'
import API from "../../API"

class SignIn extends React.Component {
  constructor(props) {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    API.signIn(this.state)
      .then(user => this.props.signIn(user.username, user.token, user))
  }

  render() {
        
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" onChange={this.handleChange}/><br/>

        <label>Password:</label>
        <input type="password" name="password" onChange={this.handleChange}/><br/>

        <input type="submit" value="Sign In"/>
      </form>
    )
  }
}

export default SignIn