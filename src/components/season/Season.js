import React from 'react'
import API from '../../API'
import { Modal, Button } from 'react-bootstrap'
import MatchForm from '../match/MatchForm'
import MatchesList from '../match/MatchesList'

class Season extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            matches: null,
            season: null,
            show: false,
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

    renderMatches = () => {
        return this.state.matches.map(match => <MatchesList key={match.id} id={match.id} match={match} season_name={this.state.name} />)
    }
    

    componentDidMount(){
        API.getSeason(this.props.match.params.id)
            .then(data => this.setState({
                season: data.season,
                name: data.season.name,
                start_date: data.season.start_date,
                end_date: data.season.end_date,
                matches: data.matches
            }))
    }

    render() { 
        console.log(this.state.matches)
        const id = this.props.match.params
        const {name, start_date, end_date, matches} = this.state
        return ( 
            <div>
                <button className="margin-t-100 btn btn-dark" onClick={this.show}>Add Match</button>
                <div className="text-center">
                    <h1>Season name: {name}</h1>
                    <h2>{start_date}</h2>
                    <h3>{end_date}</h3>
                    <h4> Matches: </h4>
                    {matches !== null ?  this.renderMatches() : <p>No currently Matches</p>}
                </div>

                <div className="text-center col-lg-3 col-md-3 col-sm-6">                     
                    <Modal  show={this.state.show} onHide={this.close}>
                        <Modal.Body className="back-white">
                            <MatchForm season_id={id} addMatch={this.addMatch} />
                        </Modal.Body>
                        <Modal.Footer className="back-white">
                        <Button variant="btn btn-dark" onClick={this.close}>
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