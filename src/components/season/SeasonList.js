import React from 'react'
import {Link} from 'react-router-dom'

class SeasonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.season)
        const {name, start_date, end_date, id} = this.props.season
        return ( 
            <div>
                <h4>{this.props.tournament_name}</h4>
                <p>Season: <Link to={`/season/${ id }`} > {name}</Link> - {start_date} - {end_date}</p>
            </div>
         );
    }
}
 
export default SeasonList;