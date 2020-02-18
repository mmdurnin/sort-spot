import React from 'react';
import './App.css';
import sortSpots from './util/spot-sort';
import $ from "jquery"
import Spot from './spot-detail';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spots: ""}
  }
  
  componentDidMount() {
    return $.ajax({
      url: `https://airgara.ge/api/spots`,
      method: "GET"
    }).then((response) => sortSpots(response).then((sortedArr) => 
      this.setState({ enforced: sortedArr[0], unenforced: sortedArr[1] })))
    
  }

  render() {
    if (this.state.enforced === undefined) return null;
    const enforcedSpots = this.state.enforced.map((spot, i) => {
      return (
        <Spot key={i} name={spot.name} officer={spot.enforcementOfficer} timestamp={spot.mostRecent} enforced={"yes"} />
      )
    })
    const unenforcedSpots = this.state.unenforced.map((spot, i) => {
      return (
        <Spot key={i} name={spot.name} enforced={"no"} />
      )
    })
    return (
      <div className="App">
        <h1>Enforced Spots</h1>
        <div className="row">
          <h3>Lot Name</h3>
          <h3>Officer</h3>
          <h3>Timestamp</h3>
        </div>
        {enforcedSpots}
        <br/>
        <h1>Unenforced Spots</h1>
        {unenforcedSpots}
      </div>
    );
  }
}

export default App;
