import React from 'react'
import {Link} from 'react-router-dom'
// import API from '../../API';

class TeamsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const {name, country, city, id} = this.props.team
        return ( 
            <tr>
                <td><Link to={`/team/${ id }`}>{name}</Link></td>
                <td>{country}</td>
                <td>{city}</td>
            </tr>
                // {/*  TO DO: TeamName | Points | GF | GC | GH | GV | YC | RC */}
         );
    }

}
 
export default TeamsList;