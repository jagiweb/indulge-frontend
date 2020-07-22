import React from 'react'


class MatchesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {end_date, home_red_cards, home_team_name, home_yellow_cards, stadium, start_date, visitor_red_cards, 
            visitor_team_name, visitor_yellow_cards, home_goals, visitor_goals} = this.props.match

        return (                  
        <tr>
            <td>{home_team_name}</td>
            <td>{home_goals}</td>
            <td>{home_red_cards}</td>
            <td>{home_yellow_cards}</td>
            <td>vs</td>
            <td>{visitor_team_name}</td>
            <td>{visitor_goals}</td>
            <td>{visitor_red_cards}</td>
            <td>{visitor_yellow_cards}</td>
            <td>{stadium}</td> 
            <td>{start_date}</td>
            <td>{end_date}</td>
        </tr>
        
         );
    }
}
 
export default MatchesList;