import React,{useEffect} from 'react'
import itinerariesAction from '../redux/actions/itinerariesAction'
import ItineraryCard from '../components/ItineraryCard'
import {connect} from 'react-redux'

const CityTinerary =(props)=>{
   
    useEffect(()=>{
        props.LoadItineraries()
        window.scrollTo(0,0)
    },[])
    let arrayFromItineraries = []
    props.allItineraries.map((itinerario)=>{
        if(itinerario.IdCity === props.IdOfCity){
            arrayFromItineraries.push(itinerario)
        }
    })
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