import { fork } from 'redux-saga/effects';
import { watchLoadUniversities } from './watchers';

export function* universitiesSaga() {
  yield fork(watchLoadUniversities);
}