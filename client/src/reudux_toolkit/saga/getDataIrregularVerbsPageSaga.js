import {put, call, takeLatest} from 'redux-saga/effects'
import axios from 'axios';
import { getDataFullfilled, getDataRejected, getDataPending } from '../slices/getDataIrregularVerbsPage';

function* workGetData() {
    try {
        const response = yield call(axios.get, 'http://localhost:8008/api/get_irregularverbs_page');
        yield put(getDataFullfilled({payload: response.data}));
    } catch (error) {
        yield put(getDataRejected({error: error.message}));
    }
}


//lắng nghe action pending => gọi cho getData ngay
export default function* getDataIrreSaga() {
    yield takeLatest(getDataPending.type, workGetData)
}