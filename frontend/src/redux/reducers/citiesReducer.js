const initialState = {
    cities: [],
    filteredCities: []
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
        default: return state
    }
}
export default citiesReducer