import React from 'react'

class MatchesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {name} = this.props.match
        return ( 
            <div>
                <p>{name}</p>
                match list here
            </div>
         );
    }
}
 
export default MatchesList;