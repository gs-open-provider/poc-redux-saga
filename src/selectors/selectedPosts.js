import _ from 'lodash';
import { createSelector } from 'reselect';

const usersSelector = state => state.user;
const selectedUserSelector = state => state.selectedUserIds;

const getUsers = (users, selectedUserIds) => {
  const selectedPost = _.filter(
    users,
    user => _.contains(selectedUserIds, user.id)
  );

  return selectedPost;
}

export default createSelector(
  usersSelector,
  selectedUserSelector,
  getUsers
);