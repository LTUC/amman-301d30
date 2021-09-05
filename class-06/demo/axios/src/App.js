import React, { Component } from 'react'
import axios from 'axios';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      locationData: {}
    }
  }

  handelLocationNameChange = (e) => { this.setState({ locationName: e.target.value }) }

  handelSubmit = async (e) => {

    // await key words only work within async functions
    e.preventDefault();
    console.log(this.state.locationName);


    // TODO: 
    /**
     * First we need to pass the values from the user to the URL 'concatenating the data
     * Second thing we need to hide our KEY
     * Last step is to send the request to location IQ
     */

    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.locationName}&format=json`;

    console.log(url);

    const response = await axios.get(url);
    // axios is  promise
    // promises are JS async functions
    // async functions are function that work in the backend and they dont wait for the line or the function to finish executing 

    console.log(response.data[0]);
    this.setState({
      locationData: response.data[0]
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input type="text" onChange={this.handelLocationNameChange} placeholder="enter city name" />
          <input type="submit" value="Explorer!" />
        </form>

        <div>
          <h2>Location Info</h2>
          <p>{this.state.locationData.display_name}</p>
          <p>lat: {this.state.locationData.lat}</p>
          <p>lon: {this.state.locationData.lon}</p>
        </div>
      </div>
    )
  }
}

export default App
