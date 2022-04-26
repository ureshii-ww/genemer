import {
  loadUniversities,
  loadUniversitiesFailure,
  loadUniversitiesSuccess,
} from '../../reducers/universities';
import { call, put } from 'redux-saga/effects';
import { UniversitiesService } from '../../../services/universities/universities.service';

export function* loadUniversitiesSaga({ payload }: ReturnType<typeof loadUniversities>) {
  try {
    const response: Awaited<ReturnType<typeof UniversitiesService.getUniversitiesWithSearch>> =
      yield call(UniversitiesService.getUniversitiesWithSearch, payload);
    yield put(loadUniversitiesSuccess(response.data));
  } catch (error) {
    yield put(loadUniversitiesFailure());
  }
}
