import React from 'react'
import API from '../../API'
import { Modal, Button, Table } from 'react-bootstrap'
import MatchForm from '../match/MatchForm'
import MatchesList from '../match/MatchesList'
import TeamForm from '../team/TeamForm'
import TeamsList from '../team/TeamsList'

class Season extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            matches: null,
            season: null,
            teams: null,
            show: false,
            showTeam: false,
            id: null,
            order: "Default"
         }
    }

    componentDidMount(){
        API.getSeason(this.props.match.params.id)
            .then(season => this.setState({
                season: season.data,
                id: season.id,
                name: season.name,
                start_date: season.start_date,
                end_date: season.end_date,
            }))

        
    }

    componentDidUpdate(){
        if (this.state.matches === null) {
            API.getMatches(this.state.id)
                .then(data => this.setState({
                    matches: data.matches,
                }))
        }
        if (this.state.teams === null){
            API.getTeams(this.state.id)
                .then(data => this.setState({
                    teams: data.teams
                }))
        }
    }

    show = () => {
        this.setState({
            show: true
        })
    }

    close = () => {
        this.setState({
            show: false
        })
    }

    showTeam = () => {
        this.setState({
            showTeam: true
        })
    }

    closeTeam = () => {
        this.setState({
            showTeam: false
        })
    }
    

    renderMatches = () => {
        if (this.state.matches !== undefined){
            return this.state.matches.map(match => <MatchesList key={match.id} id={match.id} match={match} season_name={this.state.name} />)
        }
    }

    addMatch = data => {
        this.setState({
            matches: [...this.state.matches, data]
        })
    }

    renderTeams = () => {
        if (this.state.teams !== undefined) {
        return this.state.teams.map(team => <TeamsList key={team.id} id={team.id} team={team} season_name={this.state.name} />)
        }
    }

    addTeam = data => {
        this.setState({
            teams: [...this.state.teams, data]
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        if (this.state.order === "Team name"){
            return this.setState({
                matches: this.state.matches.sort( (a, b) => a.home_team_name.localeCompare(b.home_team_name))
            })
        }else if (this.state.order === "Goals"){
            console.log("by goals")
        }
        console.log(this.state.matches)
        }

    render() { 
        const id = this.props.match.params
        const {name, start_date, end_date, matches, teams} = this.state
        return ( 
            <div>
                <button className="margin-t-100 btn btn-dark" onClick={this.show}>Add Match</button>
                <button className="margin-t-100 btn btn-dark" onClick={this.showTeam}>Add Team</button>
                <div>
                    <div className="text-center">
                        <h2>Season: {name}</h2>
                        <h5>{start_date} - {end_date}</h5>
                        <h4> Matches: </h4>
                    </div>
                    <select value={this.state.order} defaultValue={this.state.order} name="order" onChange={this.handleChange}>
                        <option> - </option>
                        <option>Team name</option>
                        <option>Goals</option>
                    </select>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Home Team</th>
                                <th>Goals</th>
                                <th>Red Cards</th>
                                <th>Yellow Cards</th>
                                <th>vs</th>
                                <th>Visitor Team</th>
                                <th>Goals</th>
                                <th>Red Cards</th>
                                <th>Yellow Cards</th>
                                <th>Stadium</th>
                                <th>Starting Time</th>
                                <th>Ending Time</th>
                            </tr>
                        </thead>
                            <tbody>
                                    {matches !== null ?  this.renderMatches() : <p>No currently Matches</p>}
                            </tbody>
                        
                    </Table>
                    
                    <h4 className="margin-t-50 text-center">Teams of this season:</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Country</th>
                                <th>City</th>
                            </tr>
                        </thead>
                            <tbody>
                                {teams !== null ?  this.renderTeams() : <p>No currently Teams</p>}
                            </tbody>
                    </Table>
                    
                </div>

                <div className="text-center col-lg-3 col-md-3 col-sm-6">                     
                    <Modal  show={this.state.show} onHide={this.close}>
                        <Modal.Body className="back-white">
                            <MatchForm close={this.close} season_id={id.id} addMatch={this.addMatch} teams={this.state.teams}/>
                        </Modal.Body>
                        <Modal.Footer className="back-white">
                        <Button variant="btn btn-dark" onClick={this.close}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div className="text-center col-lg-3 col-md-3 col-sm-6">                     
                    <Modal  show={this.state.showTeam} onHide={this.closeTeam}>
                        <Modal.Body className="back-white">
                            <TeamForm closeTeam={this.closeTeam} season_id={id.id} addTeam={this.addTeam} />
                        </Modal.Body>
                        <Modal.Footer className="back-white">
                        <Button variant="btn btn-dark" onClick={this.closeTeam}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
         );
    }
}
 
export default Season;