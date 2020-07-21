import React from 'react'
import {Link} from 'react-router-dom'


class TournamentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {name, country, city, types, id} = this.props.tournament
        return ( 
            <div> 
                <p><Link to={`/tournament/${ id }`} > {name}</Link> - {country} - {city} - {types}</p>
            </div>
         );
    }
}
 
export default TournamentList;