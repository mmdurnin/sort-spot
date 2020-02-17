import axios from 'axios'
import React from 'react';
import './App.css';
import sortSpots from './util/spot-sort';

// var SPOTS = $.ajax({
//   url: `https://airgara.ge/api/spots`,
//   method: "GET"
// })

// let awaFunction = async () => {
//   const spots = await axios.get(`https://airgara.ge/api/spots`);
//   return spots;
// };

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spots: ""}
  }
  async componentDidMount() {
    const response = await fetch(`https://airgara.ge/api/spots`)
    const json = await response.json();
    this.setState({ spots: json })
    console.log(sortSpots(this.state.spots))
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
