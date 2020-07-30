import React from 'react'
import API from '../../API'

class TeamForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            country: "",
            city: ""
         }
    }

    handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
        season_id: this.props.season_id,
    })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        API.createTeam(this.state)
            .then(data => this.props.addTeam(data))
        this.props.closeTeam()
    }

    render() { 
        console.log(this.props.season_id)
        return ( 
                  <form onSubmit={this.handleSubmit}>
                  <h3 className="m-tb-20 text-center">Add Team</h3>
                  <div className="row">
                    <div class="col-md-2"></div>
                    <div className="col-md-2">
                      <label>Name:</label>
                    </div>
                    <div className="col-md-2">
                      <input type="text" placeholder="Team name" name="name" onChange={this.handleChange}/><br/>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div class="col-md-2"></div>
                    <div className="col-md-2">
                     <label>Country:</label>
                    </div>
                    <div className="col-md-2">
                      <input type="text" placeholder="Optional" name="country" onChange={this.handleChange}/><br/>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-2"></div>
                    <div className="col-md-2">
                     <label>City:</label>
                    </div>
                    <div className="col-md-2">
                      <input type="text" placeholder="Optional" name="city" onChange={this.handleChange}/><br/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center m-t-20">
                      <input className="btn btn-success" type="submit" value="Add Team"/>
                    </div>
                  </div>  
                </form>
         );
    }
}
 
export default TeamForm;