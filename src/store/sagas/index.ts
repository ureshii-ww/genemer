import { all, spawn } from 'redux-saga/effects';
import { universitiesSaga } from './universities';

export default function* rootSaga() {
  const sagas = [universitiesSaga];
  yield all(sagas.map(s => spawn(s)));
}
