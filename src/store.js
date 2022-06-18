import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { addReducer, filterReducer, } from './reducers'

const store = configureStore({
    reducer: combineReducers({
        addReducer, filterReducer
    })
})

export default store;