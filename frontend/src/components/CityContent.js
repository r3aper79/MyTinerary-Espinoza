import CityTinerary from './CityTinerary'
import { useEffect, useState } from "react"
import axios from 'axios'

//los componentes reciben props de ruteo aunque no esten implicitos
//history
//location
//match.params tiene el parametro que se manda de la url osea de route /:nombreQueSea

const CityContent = (props) =>{
    const myID = props.match.params.id
    let [myCity,setmyCity] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3080/api/city/${myID}`)
        .then(response => setmyCity(response.data.response))
        .catch(error => console.log(error))
    },[])
    
    return(
        <>
            <div className="cityContent">
                <div className="img-cityContent" style={{
                    backgroundImage: `url(/img/${myCity.src})`,
                    backgroundSize: 'cover'
                }}>
                    <h1 id="titulo-cityContent">Welcome to {myCity.titulo}</h1>   
                </div>
            </div>
            <div>
                <CityTinerary IdOfCity={myID}/>
            </div>
        </>
    )
}

export default CityContent