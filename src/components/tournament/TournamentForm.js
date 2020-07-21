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
    e.preventDefault()
    API.createTournament(this.state)
        .then(data => this.props.addTournament(data))
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" required name="name" onChange={this.handleChange}/><br/>
                    <label>Country:</label>
                    <input type="text" required name="country" onChange={this.handleChange}/><br/>
                    <label>City:</label>
                    <input type="text" required name="city" onChange={this.handleChange}/><br/>
                    <label>Type:</label>
                    <select value={this.state.types} defaultValue={this.state.types} onChange={this.handleChange} name="types">
                        <option value="International">International</option>
                        <option value="National">National</option>
                        <option value="Regional">Regional</option>
                    </select>
                    <input type="submit" value="Create "/>
                </form>
            </div>
         );
    }
}
 
export default TournamentForm;