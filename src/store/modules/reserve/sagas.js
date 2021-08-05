import { call, put, all ,takeLatest } from 'redux-saga/effects';
import { addReserveSuccess } from './actions';
import api from '../../../services/api'

function* addToReserve({id}){
    //por usar o * ma função p yield é como se fosse um await do async
    const response = yield call(api.get, `trips/${id}`);
    yield put(addReserveSuccess(response.data));

}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])