import React from 'react';
import Child from './Child';
import JafarForm from './JafarForm';

/**
 * TODO list:
 * 
 * 1- is to implement the Jafar form component
 * 2- is to get the data from jafar form component to update the name of the child 
 * 
 */
class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parrotName: "Iago"
    }
  }

  showAlertMessage = (cookiesEaten) => {
    alert(`A cookie has been eaten! Total cookie eaten ${cookiesEaten}`);
  }

  updateParrotName = (newName) => {

    console.log("new Name", newName);

    this.setState({
      parrotName: newName
    });
  }

  render() {
    return (
      <div>
        <h2>I am Jafar the Parent</h2>
        <Child
          name={this.state.parrotName}
          handleClose={this.props.handleClose}
          showAlertMessage={this.showAlertMessage}
        />
        <JafarForm
          updateParrotName={this.updateParrotName}
        />
      </div>
    );
  }
}


export default Parent;