import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'

const mainReducer = combineReducers({
    CitiesRedux: citiesReducer,
    ItinerariesRedux: itinerariesReducer
})

export default mainReducer