const itinerariesAction = {
    loadItineraries : ()=>{
        return (dispatch , getState) =>{
            fetch('http://localhost:3080/api/itineraries')
            .then(response => response.json())
            .then(data => dispatch({type: 'LOAD_ITINERARIES', payload: data.response}))
            .catch(error => console.log(error))
        }
    }
}
export default itinerariesAction