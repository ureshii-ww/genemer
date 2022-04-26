import { takeEvery } from 'redux-saga/effects';
import { loadUniversities } from '../../reducers/universities';
import { loadUniversitiesSaga } from './workers';

export function* watchLoadUniversities() {
  yield takeEvery(loadUniversities, loadUniversitiesSaga);
}
