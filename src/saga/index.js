import { put, takeLatest } from "redux-saga/effects";
import mockData from '../mockData.json'
//import axios from 'axios'

function* getOffersToDisplay(action) {
    try {
        /* commented as it gives 404 and goes to catch block directly */
        //const json = axios.get('/getOffers')
        console.log("mockJson", mockData)
        yield put({ type: 'OFFERS_RECEIVED', payload: mockData.offers })
    }
    catch (error) {
        yield put({ type: 'OFFERS_ERROR', payload: error })
    }
}
export default function* productDisplaySaga() {
    yield takeLatest('GET_OFFERS', getOffersToDisplay)
}