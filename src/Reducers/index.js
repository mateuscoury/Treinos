import { combineReducers } from "redux"
import firstReducer from './firstReducer'
import apiReducer from './apiReducer'

const rootreducer = combineReducers({firstReducer,apiReducer})

export default rootreducer