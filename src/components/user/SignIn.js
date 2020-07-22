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
      this.props.SignInModalClose()
  }

  render() {
        
    return(
      <form onSubmit={this.handleSubmit}>
      <h3 className="m-tb-20 text-center">Sign In</h3>
      <div className="row">
        <div class="col-md-2"></div>
        <div className="col-md-2">
          <label>Username</label>
        </div>
        <div className="col-md-2">
          <input type="text" required name="username" onChange={this.handleChange}/><br/>
        </div>
      </div>
      
      <div className="row">
        <div class="col-md-2"></div>
        <div className="col-md-2">
         <label>Password:</label>
        </div>
        <div className="col-md-2">
          <input type="password" minlength="8" required name="password" onChange={this.handleChange}/><br/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center m-t-20">
          <input className="btn btn-success" type="submit" value="Sign In"/>
        </div>
      </div>  
    </form>
    )
  }
}

export default SignIn