import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const UsersList = (props) => {
  console.log(props.users);

  return (
    <ListGroup>
      {
        props.users.sort(
          (a, b) => {
            if (a.firstName > b.firstName) {
              return 1
            } else if (a.firstName < b.firstName) {
              return -1;
            } else if (a.lastName > b.lastName) {
              return 1;
            } else if (a.lastName < b.lastName) {
              return -1;
            } else {
              return 0;
            }
          }
        ).map((user) => {
          return (
            <ListGroupItem key={user.id}>
              <section style={{display:'flex'}}>
                <div style={{flexGrow: 1}}>
                  {user.firstName} {user.lastName}
                </div>
                <div className='pull right'>
                  <Button outline color='danger' onClick={() => props.onDeleteUser(user.id)}>Delete</Button>
                </div>
              </section>
            </ListGroupItem>
          );
        })
      }
    </ListGroup>
  )
};

export default UsersList;