import React from 'react';
import Child from './Child';


class Parent extends React.Component {

  render() {
    return (
      <div>
        <h2>I am Jafar the Parent</h2>
        <Child
          name="Iago"
        />
      </div>
    );
  }
}


export default Parent;