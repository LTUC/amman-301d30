import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jafarImage from '../assets/jafar.jpg';
class Child extends React.Component {
  /**
   * TODO:
   * 1 - we need to set an initial value in our constructor to how many number of cookies eaten by the child (state) - DONE
   * 
   * 2 - We want a button to request more cookies 
   * 3 - The moment the button is clicked the number of cookie eaten will increase (event)
   * 
   */

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

    // alert(`button clicked ${this.state.cookieEaten}`);

  }


  render() {
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