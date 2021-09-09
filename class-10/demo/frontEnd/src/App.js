import React, { Component } from 'react'
import axios from 'axios';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      locationData: {},
      showLocationData: false,
      weatherData: []
    }
  }

  handelLocationNameChange = (e) => { this.setState({ locationName: e.target.value }) }

  handelSubmit = async (e) => {

    // await key words only work within async functions
    e.preventDefault();
    console.log(this.state.locationName);


    const locationIqUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.locationName}&format=json`;



    // console.log(locationIqUrl);

    axios.get(locationIqUrl).then(locationIqResponse => {

      const locationIqData = locationIqResponse.data[0];

      this.setState({
        locationData: locationIqData
      });

      const serverWeatherUrl = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${locationIqData.lat}&lon=${locationIqData.lon}`;

      axios.get(serverWeatherUrl).then(weatherResponse => {

        this.setState({
          weatherData: weatherResponse.data,
          showLocationData: true
        });

      });

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
                this.state.weatherData.map((weather) => {
                  return (
                    <div>
                      <p>{weather.description}</p>
                      <p>{weather.date}</p>
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
