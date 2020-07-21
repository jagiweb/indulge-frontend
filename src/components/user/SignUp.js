import React from 'react'
import API from "../../API"


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
    API.signUp(this.state)
      .then(user => this.props.signIn(user.username, user.token, user))
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

        <input type="submit" value="Sign Up"/>
      </form>
    )
  }
}

export default SignUp