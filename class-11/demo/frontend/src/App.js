import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cats from './components/Cats';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cats />
      </div>
    )
  }
}

export default App
