import React from 'react'
import API from '../../API'

class SeasonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            start_date: "",
            end_date: ""
         }
    }

    handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
        tournament_id: this.props.tournament_id,
    })
    }

    handleSubmit = (e) => {
    e.preventDefault()
    API.createSeason(this.state)
        .then(data => this.props.addSeasons(data))
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" required name="name" onChange={this.handleChange}/><br/>
                    <label>Start Date:</label>
                    <input type="date" required name="start_date" onChange={this.handleChange}/><br/>
                    <label>End Date:</label>
                    <input type="date" required name="end_date" onChange={this.handleChange}/><br/>
        
                    <input type="submit" value="Create "/>
                </form>
            </div>
         );
    }
}
 
export default SeasonForm;