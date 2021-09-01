import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class JafarForm extends React.Component {

  // TODO:

  /**
   * 
   * 1 - we need to get the values from the input field and save them
   *   - while the user is input the new data in the field, using an onChange event 
   * 2- when the user clicks submit, the new value should be passed back the parent component
   */

  constructor(props) {
    super(props);
    this.state = {
      newParrotName: ''
    }
  }


  saveNewName = (e) => {
    console.log(e.target.value);
    this.setState({ newParrotName: e.target.value });
  }


  handelSubmit = (e) => {
    e.preventDefault();
    console.log('Form has been submitted');
    this.props.updateParrotName(this.state.newParrotName)
  }


  render() {
    return (
      <Form onSubmit={this.handelSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Parrot Name</Form.Label>
          <Form.Control onChange={this.saveNewName} type="text" placeholder="Enter the new Parrot name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default JafarForm;