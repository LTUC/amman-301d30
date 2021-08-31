import React from 'react';
import Parent from './components/Parent';
import 'bootstrap/dist/css/bootstrap.min.css'; // it will import and include the bootstrap stylesheet into our project

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>I am App js</h1>
        <Parent />
      </div>
    );
  }
}


export default App;