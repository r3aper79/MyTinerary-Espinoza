const initialState = {
    cities: [],
    filteredCities: [],
    city: ''
}

const citiesReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'LOAD_CITIES':
            return{
               ...state,
               cities: action.payload,
               filteredCities: action.payload
            }
        case "GET_INPUT_VALUE":
              return{
                  ...state,
                  filteredCities: state.cities.filter(city => city.titulo.toLowerCase().indexOf(action.payload.toLowerCase().trim()) === 0)
              }
        case "GET_CITY":
            return{
                ...state,
                city: action.payload
            }
        default: return state
    }
}
export default citiesReducer