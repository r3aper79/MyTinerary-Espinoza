import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import userReducer from './userReducer'

const mainReducer = combineReducers({
    CitiesRedux: citiesReducer,
    ItinerariesRedux: itinerariesReducer,
    UserRedux: userReducer
})

export default mainReducer