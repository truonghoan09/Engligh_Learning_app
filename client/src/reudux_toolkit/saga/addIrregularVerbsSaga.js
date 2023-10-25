import {put, takeLatest, call} from 'redux-saga/effects';
import { addIrrFullilled, addIrrPending, addIrrRejected } from '../slices/addIrregularVerbs';
import axios from 'axios';

function* workAddIrr(data) {
    try {
        const response = yield call(axios.post, 'http://localhost:8008/api/add_irregularverbs', data);
        yield put(addIrrFullilled(response.data));
    } catch (error) {
        yield put(addIrrRejected({error: error.message}));
    }
}

export default function* addIrrVerbsSaga() {
    yield takeLatest(addIrrPending.type, workAddIrr);
}