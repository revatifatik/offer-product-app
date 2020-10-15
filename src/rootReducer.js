import { combineReducers } from 'redux'
import productDisplayReducer from './reducer/index'

const rootReducer = combineReducers({
    productDisplayReducer: productDisplayReducer
})

export default rootReducer;