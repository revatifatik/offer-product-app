import { all, fork } from 'redux-saga/effects'
import productDisplaySaga from './saga/index'

export default function* rootSaga() {
    yield all([
        fork(productDisplaySaga)
    ])
}