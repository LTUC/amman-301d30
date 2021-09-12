import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export class Cats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      catsData: []
    }

  }

  /**
   * 
   * TODO:
   * 1- So we want to get the data from our BackendAPI the moment the component Loads
   * 2- Save the data in a state
   * 3- display the data using bootstrap cards
   */


  componentDidMount = () => {
    /**
     * Component did mount is a React lifecycle function that will execute/ invoke itself automatically after the render function finishes execution
     * 
     * It only occurs the first time the component finishes rendering
     * 
     */

    axios.get(`${process.env.REACT_APP_API_URL}/cat`).then((catResponse) => {

      this.setState({ catsData: catResponse.data });
    }).catch(error => alert(error.message));


  }

  render() {
    return (
      <div>
        {
          this.state.catsData.length > 0 &&
          <>
            {
              this.state.catsData.map(cat => {
                return (
                  <>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={cat.cat_img} />
                      <Card.Body>
                        <Card.Title>{cat.cat_name}</Card.Title>
                        <Card.Text>
                          {cat.cat_breed}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </>
                )
              })
            }
          </>
        }
      </div>
    )
  }
}

export default Cats
