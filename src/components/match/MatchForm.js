import React from 'react'
import API from '../../API'

class MatchForm extends React.Component {
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
        season_id: this.props.season_id,
    })
    }

    handleSubmit = (e) => {
    e.preventDefault()
    API.createMatch(this.state)
        .then(data => console.log(data))
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Stadium:</label>
                    <input type="text" required name="stadium" onChange={this.handleChange}/><br/>
                    <label>Start Date:</label>
                    <input type="time" required name="start_date" onChange={this.handleChange}/><br/>
                    <label>End Date:</label>
                    <input type="time" required name="end_date" onChange={this.handleChange}/><br/>
        
                    <input type="submit" value="Create "/>
                </form>
            </div>
         );
    }
}
 
export default MatchForm;