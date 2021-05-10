import axios from 'axios'
const itinerariesAction = {
    
    loadItineraries : (IdCity)=>{
        return (dispatch , getState) => {
            try{
                axios.get('http://localhost:3080/api/itineraries/' + IdCity)
                .then(data => dispatch({type: "LOAD_ITINERARIES" , payload: data.data.response}))
            }catch(error){console.log(error)}
        }
    }
}
export default itinerariesAction