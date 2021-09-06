import React, { Component } from 'react'
import axios from 'axios';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      locationData: {},
      showLocationData: false,
      groceriesList: []
    }
  }

  handelLocationNameChange = (e) => { this.setState({ locationName: e.target.value }) }

  handelSubmit = async (e) => {

    // await key words only work within async functions
    e.preventDefault();
    console.log(this.state.locationName);


    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.locationName}&format=json`;

    const serverUrl = `${process.env.REACT_APP_SERVER_URL}/get-groceries?type=fruit`;

    console.log(url);

    const response = await axios.get(url);
    // axios is  promise
    // promises are JS async functions
    // async functions are function that work in the backend and they dont wait for the line or the function to finish executing 

    const serverResponse = await axios.get(serverUrl);

    console.log(response.data[0]);
    console.log(serverResponse.data);
    this.setState({
      locationData: response.data[0],
      showLocationData: true,
      groceriesList: serverResponse.data
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input type="text" onChange={this.handelLocationNameChange} placeholder="enter city name" />
          <input type="submit" value="Explorer!" />
        </form>
        {
          this.state.showLocationData &&
          <div>
            <div>
              <h2>Location Info</h2>
              <p>{this.state.locationData.display_name}</p>
              <p>lat: {this.state.locationData.lat}</p>
              <p>lon: {this.state.locationData.lon}</p>
            </div>

            <div>
              {
                this.state.groceriesList.map((item) => {
                  return (
                    <div>
                      <p>{item.name}</p>
                      <p>{item.type}</p>
                      <p>{item.icon}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>

        }
      </div>
    )
  }
}

export default App
