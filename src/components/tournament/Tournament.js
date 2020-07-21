import React from 'react'
import API from '../../API'
import SeasonList from '../season/SeasonList'
import SeasonForm from '../season/SeasonForm'
import { Modal, Button } from 'react-bootstrap'

class Tournament extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            tournament: null,
            seasons: null,
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
    

    componentDidMount(){
        API.getTournament(this.props.match.params.id)
            .then(data => this.setState({
                tournament: data.tournament,
                seasons: data.seasons,
                name: data.tournament.name,
                city: data.tournament.city,
                country: data.tournament.country,
                types: data.tournament.types,
                id: data.tournament.id

            }))
    }

    renderSeasons = () => {
            return this.state.seasons.map(season => <SeasonList key={season.id} id={season.id} season={season} tournament_name={this.state.name} />)
    }

    addSeasons = data => {
        this.setState({
            seasons: [...this.state.seasons, data.season]
        })
    }

    render() { 
        const {name, city, country, types, seasons, id} = this.state
        console.log(this.state.seasons)
        return ( 
            <div>
                <button className="margin-t-100 btn btn-dark" onClick={this.show}>Add Season</button>
                <div className="text-center">
                    <h1>Tournament name: {name}</h1>
                    <h2>{country}</h2>
                    <h3>{city}</h3>
                    <h4>{types}</h4>
                    <h4> Season's: </h4>
                    {seasons !== null ?  this.renderSeasons() : <p>No currently Seasons</p>}
                </div>

                <div className="text-center col-lg-3 col-md-3 col-sm-6">                     
                    <Modal  show={this.state.show} onHide={this.close}>
                        <Modal.Body className="back-white">
                            <SeasonForm tournament_id={id} addSeasons={this.addSeasons} />
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
 
export default Tournament