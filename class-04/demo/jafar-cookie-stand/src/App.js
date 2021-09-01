import React from 'react';
import Parent from './components/Parent';
import 'bootstrap/dist/css/bootstrap.min.css'; // it will import and include the bootstrap stylesheet into our project

import DataModel from './components/DataModel';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleClose = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <h1>I am App js</h1>
        <Parent
          handleClose={this.handleClose}
        />
        <DataModel
          show={this.state.show}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}


export default App;