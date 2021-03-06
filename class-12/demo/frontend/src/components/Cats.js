import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AddCat from './AddCat';

export class Cats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      catsData: [],
      showAddModal: false,
    }

  }

  /**
   * Handel the submit of the Display Modal Form
   */
  handelAddModal = (e) => {
    e.preventDefault();

    const reqBody = {
      cat_name: e.target.catName.value,
      cat_breed: e.target.catBreed.value,
      cat_img: e.target.catImage.value,
    }
    // console.log(reqBody);

    /**
     * Using axios you want to send the data back to the backend so it would create a new cat
     * 
     * After that when you get the response for the added new cat, update the state with the new cat
     */

    axios.post(`${process.env.REACT_APP_API_URL}/cat`, reqBody).then(createdCatObject => {
      this.state.catsData.push(createdCatObject.data); // push the new data into the state of the catsData
      this.setState({ catsData: this.state.catsData }); // update the data using setState to invoke the re-render
      this.handelDisplayAddModal(); // close the modal after we are done!
    }).catch(() => alert("Something went wrong!"));
  }

  /**
   * Handel the Deletion of a cat by its ID
   */
  handelDeleteCat = (catId) => {

    /**
     * Using axios you want to send the request with the ID of the cat as a param to backend so it delete that cat
     * 
     * After that when you get the response and check if the delete count is == 1
     * if its == 1 then remove that cat from the state and the set the state to invoke the render function again.
     */

    // console.log('cat ID', catId);

    axios.delete(`${process.env.REACT_APP_API_URL}/cat/${catId}`).then(deleteResponse => {
      if (deleteResponse.data.deletedCount === 1) {
        const newCatArr = this.state.catsData.filter(cat => cat._id !== catId);
        /**
         * I want to filter out the cat ID that I deleted, by returning only the cat object that doesn't match the id of the 
         * cat that I deleted
         */
        this.setState({ catsData: newCatArr });
      }
    }).catch(() => alert("something went wrong"));
  }

  /**
 * Show/ Hide Add Modal
 */
  handelDisplayAddModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
  }

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
        <Button onClick={this.handelDisplayAddModal}>
          Show Add Cat Modal Form
        </Button>
        {/* ================================================ */}
        {/* Show/ Hide the Add New Cat Modal Form */}
        {
          this.state.showAddModal &&
          <>
            <AddCat
              show={this.state.showAddModal}
              handelAddModal={this.handelAddModal}
              handelDisplayAddModal={this.handelDisplayAddModal}
            />
          </>
        }
        {/* ================================================ */}

        {/* Render the Cards only when we have data from the Backend */}
        {
          this.state.catsData.length > 0 &&
          <>
            {/* Loop through the array of Cats Data and render them */}
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
                        <Button variant="danger" onClick={() => this.handelDeleteCat(cat._id)}>Delete Cat</Button>
                      </Card.Body>
                    </Card>
                  </>
                )
              })
            }
          </>
        }
        {/* ================================================ */}
      </div>
    )
  }
}

export default Cats
