import axios from 'axios';

export const getUsers = () => {
  return axios.get('/users?offset=1&limit=40');
}

export const createUsers = ({firstName, lastName}) => {
  return axios.post('/users', {
    firstName,
    lastName
  });
}

export const deleteUsers = (userId) => {
  return axios.delete(`/users/${userId}`);
}