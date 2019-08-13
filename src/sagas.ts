import { put, delay, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';

export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: actions.INCREMENT });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
