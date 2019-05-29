import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class NewUserForm extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleFirstNameChange = val => {
    this.setState({
      firstName: val.target.value
    });
  }
  
  handleLastName = val => {
    this.setState({
      lastName: val.target.value
    });
  }
  
  handleSubmit = val => {
    val.preventDefault();

    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })

    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Firstname</Label>
          <Input placeholder='Enter Firstname' onChange={this.handleFirstNameChange}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Lastname</Label>
          <Input placeholder='Enter Lastname' onChange={this.handleLastName}></Input>
        </FormGroup>
        <FormGroup>
          <Button block outline color='primary' type='submit'>Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}
    
export default NewUserForm;
