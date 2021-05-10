import React,{useEffect} from 'react'
import itinerariesAction from '../redux/actions/itinerariesAction'
import ItineraryCard from '../components/ItineraryCard'
import {connect} from 'react-redux'

const CityTinerary =(props)=>{
    console.log("city tinerario" , props)

    useEffect(()=>{
        props.LoadItineraries(props.IdOfCity)
        window.scrollTo(0,0)
    },[])
    //cambiar esto llamar itinerarios individuales
    let arrayFromItineraries = props.allItineraries
    return(
        <>
            <ItineraryCard items={arrayFromItineraries}/>
        </>
    )
}
const mapStateToProps = state =>{
    return{
        allItineraries: state.ItinerariesRedux.itineraries
    }
}
const mapDispatchToProps = {
    LoadItineraries: itinerariesAction.loadItineraries
}
export default connect(mapStateToProps,mapDispatchToProps)(CityTinerary)