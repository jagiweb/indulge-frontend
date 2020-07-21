import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import TournamentForm from '../tournament/TournamentForm'
import TournamentList from '../tournament/TournamentList'
import API from '../../API'
import './profile.css'

class Profile extends React.Component {
    
    state = {
        show: false,
        tournaments: []
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
        API.getTournaments(this.props.user_id)
            .then(data => this.setState({
                tournaments: this.props.tournaments
            }))
    }

    addTournament = data => {
        this.setState({
            tournaments: [...this.state.tournaments, data]
        })
    }

    renderTournaments = () =>{
        return this.state.tournaments.map(tournament => <TournamentList id={tournament.id} tournament={tournament} name={tournament.name} key={tournament.id}/>)
    }


    
    render() { 
        return ( 
            <div>
                <div  className="">
                    <button className="margin-t-100 btn btn-dark" onClick={this.show}>Add Tournament</button>
                    <h2 className="margin-t-50 text-center bold">All your tournaments</h2>
                </div>
                <div className="margin-t-50">
                    {this.renderTournaments()}
                </div>
                <div className="text-center col-lg-3 col-md-3 col-sm-6">  
                    
                    <Modal  show={this.state.show} onHide={this.close}>
                        <Modal.Body className="back-white">
                            <TournamentForm addTournament={this.addTournament} user={this.props.user} />
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
 
export default Profile;