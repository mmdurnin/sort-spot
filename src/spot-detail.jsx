import React, { Component } from 'react';

class Spot extends Component {

    render() {
        let enforcedDetails = this.props.enforced === "yes" 
        ? <div className="row"><li>{this.props.officer}</li><li>{this.props.timestamp}</li></div>
            : <div className="row"><li>N/A</li><li>N/A</li></div>
        return(
            <div className="row">
                <li>{this.props.name}</li>
                {enforcedDetails}
            </div>
        )
    }
}

export default Spot;