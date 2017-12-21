// listening to events
// 1. swao currency
// 2. change base currency
// 3. first loaded
import { takeEvery } from 'redux-saga/effects';

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencies';

function* fetchRates(action) {
  console.log('action listened by Saga', action);
  yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchRates);
  yield takeEvery(SWAP_CURRENCY, fetchRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchRates);
}
