export const Types = {
  GET_USERS_REQUESTS: 'GET_USER_REQUEST',
  GET_USERS_SUCCESS: 'GET_USER_SUCCESS',
  CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
  DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
  USER_ERROR: 'USER_ERROR'
}

export const getUserRequests = () => ({
  type: Types.GET_USERS_REQUESTS
});

export const getUserSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    items
  }
});

export const createUserRequest = ({ firstName, lastName }) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName
  }
});

export const deleteUserRequest = ({userId}) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: {
    userId
  }
});

export const userError = (error) => ({
  type: Types.USER_ERROR,
  payload: {
    error
  }
});