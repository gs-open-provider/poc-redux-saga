import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert} from 'reactstrap'
import {getUserRequests, createUserRequest, deleteUserRequest, userError} from '../actions/users';
import UsersList from './usersList';
import NewUserForm from './NewUserForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUserRequests();
  }

  handleSubmit = (props) => {
    this.props.createUserRequest({
      firstName: props.firstName,
      lastName: props.lastName
    });
  }

  handleDelete = (userId) => {
    this.props.deleteUserRequest({
      userId
    });
  }

  onDismiss = () => {
    this.props.userError({
      error: ''
    });
  }

  render() {    
    const users = this.props.users;
    console.log(this.props.users.error);
    
    return (
      <div style={{margin:'0 auto', padding: '20px', maxWidth: '600px'}}>
        <Alert color='danger' isOpen={!!this.props.users.error} toggle={this.onDismiss}>
          {this.props.users.error}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList onDeleteUser={this.handleDelete} users={users.items}/> 
      </div>
    );
  }
}

export default connect(({users}) => ({users}), 
  {
    getUserRequests, 
    createUserRequest, 
    deleteUserRequest,
    userError
  })(App);
