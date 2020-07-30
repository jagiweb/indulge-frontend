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
      this.props.SignUpModalClose()
  }

  render() {
    return(
    
      <form onSubmit={this.handleSubmit}>
        <h3 className="m-tb-20 text-center">Sign Up</h3>
        <div className="row" >
            <div class="col-md-2"></div>
            <div className="col-md-2 text-center">
              <label>Name</label>
            </div>
            <div className="col-md-3">
              <input type="text" required name="name" onChange={this.handleChange}/><br/>
            </div>
        </div>
        <div className="row">
          <div class="col-md-2"></div>
          <div className="col-md-2">
            <label>Lastname</label>
          </div>
          <div className="col-md-2">
            <input type="text" required name="lastname" onChange={this.handleChange}/><br/>
          </div>
        </div>

        <div className="row">
          <div class="col-md-2"></div>
          <div className="col-md-2">
            <label>Username:</label>
          </div>
          <div className="col-md-2">
            <input type="text" required name="username" onChange={this.handleChange}/><br/>
          </div>
        </div>

        <div className="row">
          <div class="col-md-2"></div>
          <div className="col-md-2">
            <label>Email:</label>
          </div>
          <div className="col-md-2">
            <input type="email" required name="email" onChange={this.handleChange}/><br/>
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
            <input className="btn btn-success" type="submit" value="Sign Up"/>
          </div>
        </div>  
      </form>
    )
  }
}

export default SignUp