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
        this.props.close()
        e.preventDefault()
        API.createSeason(this.state)
            .then(data => this.props.addSeasons(data))
    }

    render() { 
        return ( 

                <form onSubmit={this.handleSubmit}>
                    <h3 className="m-tb-20 text-center">Add Season</h3>
                    <div className="row">
                    <div class="col-md-2"></div>
                    <div className="col-md-2">
                        <label>Name</label>
                    </div>
                    <div className="col-md-2">
                        <input type="text" placeholder="Season name" name="name" onChange={this.handleChange}/><br/>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div class="col-md-2"></div>
                    <div className="col-md-2">
                        <label>Start date</label>
                    </div>
                    <div className="col-md-2">
                        <input type="date" required name="start_date" onChange={this.handleChange}/><br/>
                    </div>
                    </div>
                    <div className="row">
                    <div class="col-md-2"></div>
                    <div className="col-md-2">
                        <label>End date</label>
                    </div>
                    <div className="col-md-2">
                        <input type="date" required name="end_date" onChange={this.handleChange}/><br/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 text-center m-t-20">
                        <input className="btn btn-success" type="submit" value="Add Season"/>
                    </div>
                    </div>  
                </form>
            
         );
    }
}
 
export default SeasonForm;