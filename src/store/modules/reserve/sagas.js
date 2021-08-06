import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addReserveSuccess, updateAmountReserve } from './actions';
import api from '../../../services/api'

function* addToReserve({ id }) {
    const tripExists = yield select(
        state => state.reserve.find(trip => trip.id === id)
    );
    if (tripExists) {
        //aumentar o amount....
        const amount = tripExists.amount + 1;

        yield put(updateAmountReserve(id, amount));
    } else {

        //por usar o * ma função p yield é como se fosse um await do async
        const response = yield call(api.get, `trips/${id}`);
        const data = {
            ...response.data,
            amount: 1
        }

        localStorage.setItem('reserve', JSON.stringify(data));
        yield put(addReserveSuccess(data));

    }
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])