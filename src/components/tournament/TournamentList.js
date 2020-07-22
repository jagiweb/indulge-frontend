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
            <tr>
                <td><Link to={`/tournament/${ id }`} > {name}</Link></td>
                <td>{country}</td>
                <td>{city}</td>
                <td>{types}</td>
            </tr>
         );
    }
}
 
export default TournamentList;