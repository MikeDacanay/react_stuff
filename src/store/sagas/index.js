import { takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../action/actionTypes';

import {
    fetchDog,
} from './sagaDogs';

export function* watchRootSagas() {    
    yield takeEvery(actionTypes.SAGA_FETCH_RANDOM_DOG, fetchDog);
}