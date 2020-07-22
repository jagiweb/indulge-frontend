import React from 'react'
import API from '../../API'

class MatchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            stadium: "",
            start_date: "",
            end_date: "",
            team_id: 1,
            status: "WON",
            goals: 0,
            yellow_cards: 0,
            red_cards: 0,
            team_id2: 1,
            status2: "LOST",
            goals_2: 0,
            yellow_cards2: 0,
            red_cards2: 0

         }
    }

    handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
        season_id: this.props.season_id
    })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        API.createMatch(this.state)
            .then(data => this.props.addMatch(data))
        this.props.close()
    }

    renderTeamsOption = () => {
        return this.props.teams.map( team => <option value={team.id}>{team.name}</option>)
    }

    render() { 
        return ( 
            // <div>
            //     <form onSubmit={this.handleSubmit}>
            //         <label>Stadium:</label>
            //         <input type="text" required name="stadium" onChange={this.handleChange}/><br/>
            //         <label>Start Date:</label>
            //         <input type="time" required name="start_date" onChange={this.handleChange}/><br/>
            //         <label>End Date:</label>
            //         <input type="time" required name="end_date" onChange={this.handleChange}/><br/>
            //         <label>Home Team:</label>
            //         <select value={this.state.team_id} defaultValue={this.state.team_id} name="team_id" onChange={this.handleChange}>
            //             {this.renderTeamsOption()}
            //         </select>
            //         <label>Goals</label>
            //         <input type="number" name="goals" onChange={this.handleChange}/>
            //         <label>Yellow Cards</label>
            //         <input type="number" name="yellow_cards" onChange={this.handleChange} />
            //         <label>Red Cards</label>
            //         <input type="number" name="red_cards" onChange={this.handleChange} />
            //         <label>Status</label>
            //         <select value={this.state.status} defaultValue={this.state.status} name="status" onChange={this.handleChange}>
            //             <option>LOST</option>
            //             <option>DRAW</option>
            //             <option>WON</option>
            //         </select>
            //         <label>Visitor Team:</label>
            //         <select value={this.state.team_id2} defaultValue={this.state.team_id2} name="team_id2" onChange={this.handleChange}>
            //             {this.renderTeamsOption()}
            //         </select>
            //         <label>Goals</label>
            //         <input type="number" name="goals2" onChange={this.handleChange}/>
            //         <label>Yellow Cards</label>
            //         <input type="number" name="yellow_cards2" onChange={this.handleChange} />
            //         <label>Red Cards</label>
            //         <input type="number" name="red_cards2" onChange={this.handleChange} />
            //         <label>Status</label>
            //         <select value={this.state.status2} defaultValue={this.state.status2} name="status2">
            //             <option>WON</option>
            //             <option>DRAW</option>
            //             <option>LOST</option>
            //         </select>
            //         <input type="submit" value="Add Match"/>
            //     </form>
            // </div>

<form onSubmit={this.handleSubmit}>
<h3 className="m-tb-20 text-center">Add Team</h3>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
    <label>Stadium</label>
  </div>
  <div className="col-md-2">
    <input type="text" placeholder="Team name" name="stadium" onChange={this.handleChange}/><br/>
  </div>
</div>

<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Start time</label>
  </div>
  <div className="col-md-2">
    <input type="time" name="start_date" onChange={this.handleChange}/><br/>
  </div>
</div>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>End time</label>
  </div>
  <div className="col-md-2">
    <input type="time" name="end_date" onChange={this.handleChange}/><br/>
  </div>
</div>
<h4 className="text-center m-tb-20">Home team</h4>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Select Team</label>
  </div>
  <div className="col-md-2">
  <select value={this.state.team_id} defaultValue={this.state.team_id} name="team_id" onChange={this.handleChange}>
        {this.renderTeamsOption()}
  </select>
  </div>
</div>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Goals</label>
  </div>
  <div className="col-md-2">
    <input type="number" name="goals" onChange={this.handleChange}/><br/>
  </div>
</div>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Yellow Cards</label>
  </div>
  <div className="col-md-2">
    <input type="number" name="yellow_cards" onChange={this.handleChange}/><br/>
  </div>
</div>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Red Cards</label>
  </div>
  <div className="col-md-2">
    <input type="number" name="red_cards" onChange={this.handleChange}/><br/>
  </div>
</div>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Result</label>
  </div>
  <div className="col-md-2">
  <select value={this.state.status} defaultValue={this.state.status} name="status" onChange={this.handleChange}>
    <option>LOST</option>
    <option>DRAW</option>
    <option>WON</option>
  </select>
  </div>
</div>
<h4 className="text-center m-tb-20">Visitor team</h4>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Select Team</label>
  </div>
  <div className="col-md-2">
  <select value={this.state.team_id2} defaultValue={this.state.team_id2} name="team_id2" onChange={this.handleChange}>
        {this.renderTeamsOption()}
  </select>
  </div>
</div>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Goals</label>
  </div>
  <div className="col-md-2">
    <input type="number" name="goals2" onChange={this.handleChange}/><br/>
  </div>
</div>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Yellow Cards</label>
  </div>
  <div className="col-md-2">
    <input type="number" name="yellow_cards2" onChange={this.handleChange}/><br/>
  </div>
</div>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Red Cards</label>
  </div>
  <div className="col-md-2">
    <input type="number" name="red_cards2" onChange={this.handleChange}/><br/>
  </div>
</div>
<div className="row">
  <div class="col-md-2"></div>
  <div className="col-md-2">
   <label>Result</label>
  </div>
  <div className="col-md-2">
  <select value={this.state.status2} defaultValue={this.state.status2} name="status2" onChange={this.handleChange}>
    <option>LOST</option>
    <option>DRAW</option>
    <option>WON</option>
  </select>
  </div>
</div>

<div className="row">
  <div className="col-md-12 text-center m-t-20">
    <input className="btn btn-success" type="submit" value="Add Match"/>
  </div>
</div>  
</form>
         );
    }
}
 
export default MatchForm;