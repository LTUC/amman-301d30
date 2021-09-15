import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class AddCat extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handelDisplayAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Cat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handelAddModal}>
            <Form.Group className="mb-3">
              <Form.Label>Cat Name</Form.Label>
              <Form.Control type="text" name="catName" placeholder="Enter Cat Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cat Breed</Form.Label>
              <Form.Control type="text" name="catBreed" placeholder="Enter Cat Breed" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cat Image</Form.Label>
              <Form.Control type="text" name="catImage" placeholder="Enter Cat Image" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create New Cat!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    )
  }
}

export default AddCat
