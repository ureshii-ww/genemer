import { all, spawn } from 'redux-saga/effects';

export default function* rootSaga() {
  const sagas: any[] = [];
  yield all(sagas.map(s => spawn(s)));
}