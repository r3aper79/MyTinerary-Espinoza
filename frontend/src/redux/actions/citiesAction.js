import axios from 'axios'

const citiesAction = {
    loadCities: () => {
        return (dispatch,getState) =>{
            fetch('http://localhost:3080/api/cities')
            .then(response => response.json())
            .then(data => dispatch({type: 'LOAD_CITIES', payload: data.response}))
        }
    },
    getFilteredCities: (input) =>{
        return (dispatch,getState) => {
            dispatch({
                type: 'GET_INPUT_VALUE',
                payload: input
            })
        }
    },
    getOneCity : (Id) => {
        return (dispatch , getState) => {
            axios.get(`http://localhost:3080/api/city/` + Id)
            .then(response => dispatch({
                type: 'GET_CITY',
                payload: response.data.response
            }))
            .catch(error => console.log(error))
        }
    }
}
export default citiesAction