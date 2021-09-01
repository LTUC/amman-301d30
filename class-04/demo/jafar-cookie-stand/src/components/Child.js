import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jafarImage from '../assets/jafar.jpg';
class Child extends React.Component {

  constructor(props) {
    super(props); // to pass down the values that need to be initialized in the inherited class
    this.state = {
      cookieEaten: 0,
      // childIsFull: false, // just to show you, you can have multiple properties within the state object
    }
  }

  increaseNumberOfCookiesEaten = () => {
    // this.setState is a behavior we inherent from the React Component Class and we use it to do two things
    // 1- change the state value from the constructor 
    // 2- re-render the component HTML to reflect the changes on the frontend
    this.setState({
      cookieEaten: this.state.cookieEaten + 1
    });

    // the child here calls the function from the parent component that was passed down as a prop
    this.props.showAlertMessage(this.state.cookieEaten);
    // this.props.handleClose();
  }


  render() {
    console.log(this.props)
    return (
      <div>
        {/* Bootstrap */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={jafarImage} />
          <Card.Body>
            <Card.Title>I am the Child name {this.props.name}</Card.Title>
            <Card.Text>
              number of cookies eaten {this.state.cookieEaten}
            </Card.Text>
            <Button onClick={this.increaseNumberOfCookiesEaten}> I want more cookies!</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}


export default Child;