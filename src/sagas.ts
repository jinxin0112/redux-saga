import { call, put, delay, takeEvery } from 'redux-saga/effects';
import * as API from './api';
import * as Actions from './actions';

export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

export function* incrementAsync() {
  yield delay(1000);
  const count = yield call(API.fetchCount);
  yield put({ type: Actions.INCREMENT, payload: count.data });
}

export function* watchIncrementAsync() {
  yield takeEvery(Actions.INCREMENT_ASYNC, incrementAsync);
}
