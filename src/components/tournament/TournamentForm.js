import React from 'react'
import API from '../../API'


class TournamentForm extends React.Component {
    
    state = {
        name: "",
        types: "International",
        country: "",
        city: ""
    }

    handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
        user_id: this.props.user.user.id,
    })
    }

    handleSubmit = (e) => {
        this.props.close()
    e.preventDefault()
    API.createTournament(this.state)
        .then(data => this.props.addTournament(data.tournament))
    }

    render() { 
        return ( 
            <div>
                
                <form onSubmit={this.handleSubmit}>
                <h3 className="m-tb-20 text-center">Add Tournament</h3>
                <div className="row">
                    <div class="col-md-2"></div>
                    <div className="col-md-2">
                    <label>Name</label>
                    </div>
                    <div className="col-md-2">
                    <input type="text" required name="name" onChange={this.handleChange}/><br/>
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
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                    <label>City:</label>
                    </div>
                    <div className="col-md-2">
                    <input type="text" placeholder="Optional" name="city" onChange={this.handleChange}/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <label>Type:</label>
                    </div>
                    <div className="col-md-2">
                        <select value={this.state.types} defaultValue={this.state.types} onChange={this.handleChange} name="types">
                            <option value="International">International</option>
                            <option value="National">National</option>
                            <option value="Regional">Regional</option>
                        </select>
                    </div>
                <div>
            </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-12 text-center m-t-20">
                    <input className="btn btn-success" type="submit" value="Add Tournament"/>
                    </div>
                </div>  
                </form>
            </div>
         );
    }
}
 
export default TournamentForm;