import React from 'react'
import {Link} from 'react-router-dom'

class SeasonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {name, start_date, end_date, id} = this.props.season
        return ( 
            <tr>
                <td><Link to={`/season/${ id }`} > {name}</Link></td>
                <td>{start_date}</td>
                <td>{end_date}</td>
            </tr>
         );
    }
}
 
export default SeasonList;