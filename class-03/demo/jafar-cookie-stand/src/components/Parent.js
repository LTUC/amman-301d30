import React from 'react';
import Child from './Child';

/**
 * TODO list:
 * 
 * 1 - define a function that will display an alert message to user indicating that a cookie has been eaten
 * 2- pass the function as a prop to the child, so it can be called "invoked" from the child the moment the child requests a cookie "the button that increases the number of cookies eaten"
 */
class Parent extends React.Component {

  showAlertMessage = (cookiesEaten) => {
    alert(`A cookie has been eaten! Total cookie eaten ${cookiesEaten}`);
  }

  render() {
    return (
      <div>
        <h2>I am Jafar the Parent</h2>
        <Child
          name="Iago"
          handleClose={this.props.handleClose}
          showAlertMessage={this.showAlertMessage}
        />
      </div>
    );
  }
}


export default Parent;