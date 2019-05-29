import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    console.log(result.data.data);

    yield put(actions.getUserSuccess({
      items: result.data.data
    }));

  } catch (e) {
    console.log(e);
  }
}

function* watchGetUserRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUESTS, getUsers);
}

function* createUsers(actions) {
  try {
    yield call(api.createUsers, { firstName: actions.payload.firstName, lastName: actions.payload.lastName });
    yield call(getUsers);
  } catch (e) {
    yield put(actions.userError({
      error: 'Error occured when trying to get the user...'
    }));
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUsers);
}

function* deleteUsers({userId}) {
  try {
    yield call(api.deleteUsers, userId)
  } catch(error) {
    yield put(actions.userError({
      error: 'Error occured when trying to delete the user...'
    }));
  }
}

function* watchDeleteUserRquest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUsers, {
      userId: action.payload.userId
    });
  }
}

const usersSagas = [
  fork(watchGetUserRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRquest)
];

export default usersSagas;