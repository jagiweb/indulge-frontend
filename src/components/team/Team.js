import React from 'react'
import API from '../../API';

class Team extends React.Component {
    state = { 
        name: null,
        city: null,
        country: null,
        matches: null
     }
    

    componentDidMount(){
        API.getTeam(this.props.match.params.id)
            .then(team => this.setState({
                name: team.name,
                city: team.city,
                country: team.country,
                matches: team.matches

            }))
    }

    render() { 
        const {name, country, city} = this.state
        return ( 
            <div>
                <h2>{name}</h2>
                <h3>{country}</h3>
                <h4>{city}</h4>
            </div>
         );
    }
}
 
export default Team;