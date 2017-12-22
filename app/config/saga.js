// listening to events
// 1. swao currency
// 2. change base currency
// 3. first loaded
import { takeEvery, select, call, put } from 'redux-saga/effects';

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_ERROR, CONVERSION_RESULT } from '../actions/currencies';

const getRates = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

function* fetchRates(action) {
  try {
    let currency = action.currency;
    if (!currency) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getRates, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, error: error.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchRates);
  yield takeEvery(SWAP_CURRENCY, fetchRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchRates);
}
