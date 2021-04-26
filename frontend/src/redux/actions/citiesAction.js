
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
    }
}
export default citiesAction