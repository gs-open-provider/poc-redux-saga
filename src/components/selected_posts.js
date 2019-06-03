import React from 'react';
import {connect} from 'react-redux';
import selectedPost from '../selectors/selectedPosts';

const SelectedPostsList = (props) => {
  return(
    <div>
      <ul className='list-group'>
        {
          props.users.map((user) => {
            return <li className='list-group-item' key={user.id}>{user.firstName}</li>
          })
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    post: selectedPost(state)
  }
};

export default connect(mapStateToProps)(SelectedPostsList);