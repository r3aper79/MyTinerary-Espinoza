import CityTinerary from './CityTinerary'
import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import axios from 'axios'
import citiesAction from '../redux/actions/citiesAction'

//los componentes reciben props de ruteo aunque no esten implicitos
//history
//location
//match.params tiene el parametro que se manda de la url osea de route /:nombreQueSea

const CityContent = (props) =>{

    useEffect( ()=>{
        props.getOneCity(props.match.params.id)
    },[])
    
    let myCity = props.city
    return(
        <>
            <div className="cityContent">
                <div className="img-cityContent" style={{
                    backgroundImage: `url(/img/${myCity.src})`,
                    backgroundSize: 'cover'
                }}>
                    <h1 id="titulo-cityContent">Welcome to {myCity.titulo}</h1>
                </div>
                <CityTinerary IdOfCity={props.match.params.id}/>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return{
        city: state.CitiesRedux.city
    }
}
const mapDispatchToProps = {
    getOneCity: citiesAction.getOneCity
}

export default connect(mapStateToProps , mapDispatchToProps)(CityContent)