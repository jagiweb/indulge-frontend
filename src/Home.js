import SignIn from './components/user/SignIn'
import SignUp from './components/user/SignUp'
import React, {Fragment} from 'react';
import { Modal, Button } from 'react-bootstrap'
import './components/layout/home.css'

class Home extends React.Component {
    
    state = { 
        SignInModal: false,
        SignUpModal: false
     }
    

    SignInModalShow = () => {
        this.setState({
            SignInModal: true
        })
    }

    SignInModalClose = () => {
        this.setState({
            SignInModal: false
        })
    }

    SignUpModalShow = () => {
        this.setState({
            SignUpModal: true
        })
    }

    SignUpModalClose = () => {
        this.setState({
            SignUpModal: false
        })
    }
    render() { 
        return ( 
            <Fragment>
                <div className="text-center m-t-50">
                    <h1>Welcome to Indulge</h1>
                    <h5>Create your Leagues, Seasons and Teams and keep track of your records </h5>
                </div>
                
                <div className="m-t-300 text-center">
                    <button className="btn btn-success btn-lg padding" onClick={this.SignInModalShow}>Sign In</button>
                    <button className="btn btn-dark btn-lg padding" onClick={this.SignUpModalShow}>Sign Up</button>
                </div>
                <div className="text-center col-lg-3 col-md-3 col-sm-6">                     
                    <Modal  show={this.state.SignInModal} onHide={this.SignInModalClose}>
                        <Modal.Body className="back-white">
                            <SignIn SignInModalClose={this.SignInModalClose} signIn={this.props.signIn} />
                        </Modal.Body>
                        <Modal.Footer className="back-white">
                        <Button variant="btn btn-dark" onClick={this.SignInModalClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div className="text-center col-lg-3 col-md-3 col-sm-6">  
                    <Modal  show={this.state.SignUpModal} onHide={this.SignUpModalClose}>
                        <Modal.Body className="back-white">
                            <SignUp SignUpModalClose={this.SignUpModalClose} signIn={this.props.signIn} close={this.SignUpModalClose} />
                        </Modal.Body>
                        <Modal.Footer className="back-white">
                        <Button variant="btn btn-dark" onClick={this.SignUpModalClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                { this.props.username && <button onClick={this.props.signOut}>Sign Out</button> }

            </Fragment>

            
         );
    }
}
 
export default Home;