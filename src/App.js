import React from 'react'
import Home from './Home'
import { Route, Redirect } from 'react-router-dom'
import API from "./API.js"
import Profile from "./components/user/Profile"
import Tournament from './components/tournament/Tournament'
import NavBar from './components/layout/NavBar'
import Season from './components/season/Season'
import Team from './components/team/Team'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      username: null,
      user: null,
      tournaments: [],
      token: null
    }
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token)
        .then(json => this.signIn(json.username, json.token, json))
    }
   
  }

  signIn = (username, token, user) => {
    if (token === undefined){
      localStorage.removeItem("token")
    }else{
      localStorage.token = token
      this.setState({
        username: username,
        user: user,
        user_id: user.id,
        tournaments: user.tournaments
      })
    }
  }

  signOut = () => {
    this.setState({
      username: null
    })
    localStorage.removeItem("token")
  }

  render(){
    return (

      <div className="container">
        {this.state.username ? <NavBar signOut={this.signOut} username={this.state.username}/> : null}
        {this.state.username !== null ? <Redirect to="/profile" /> : <Redirect to="/"/>}
        <Route exact path="/tournament/:id" component={Tournament} />
        <Route exact path="/season/:id" component={Season} />
        <Route exact path="/team/:id" component={Team} />
        <Route exact path="/profile" component={() => <Profile addTournament={this.addTournament} tournaments={this.state.tournaments} user_id={this.state.user_id} user={this.state.user} signIn={this.signIn}/> } />
        <Route exact path="/" component={() => <Home username={this.state.username} signIn={this.signIn}  signOut={this.signOut}/>} />
      </div>
    )
  }
}


export default App