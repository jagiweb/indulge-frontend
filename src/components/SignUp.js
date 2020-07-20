import React from 'react'
import API from "../API"


class SignUp extends React.Component {
  constructor(props) {
    super()
    this.state = {
      username: "",
      password: "",
      email: "",
      name: "",
      lastname: ""
    }
  }

  handleChange = (e) => {
      console.log(e.target.value)
      console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // Send the data from the form to the server in order to authenticate the user
    API.signUp(this.state)
      // The server then responds with the username and a token generated from the user's id to confirm we've been authenticated successfully. We then use the signIn function passed down in props to set the state of username in App to be the username we've been sent back and store the token we've been sent back in localStorage
      .then(user => this.props.signIn(user.username, user.token))
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input type="text" required name="name" onChange={this.handleChange}/><br/>
        <label>Lastname:</label>
        <input type="text" required name="lastname" onChange={this.handleChange}/><br/>
        <label>Username:</label>
        <input type="text" required name="username" onChange={this.handleChange}/><br/>
        <label>Email:</label>
        <input type="email" required name="email" onChange={this.handleChange}/><br/>
        <label>Password:</label>
        <input type="password" minlength="8" required name="password" onChange={this.handleChange}/><br/>

        <input type="submit" value="Sign In"/>
      </form>
    )
  }
}

export default SignUp