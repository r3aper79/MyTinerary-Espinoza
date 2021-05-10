import Cities_ from '../components/Cities_'
import React, {useEffect} from 'react'
import citiesAction from '../redux/actions/citiesAction'
import {Button} from 'react-bootstrap'
import Loader from "react-loader-spinner"
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

const Cities = (props)=>{
    useEffect(()=>{
        props.LoadCities()
        window.scrollTo(0,0)
    },[])
    
    const movePointer = ()=>{
        window.scrollTo(0,0)
    }
    if(props.allCities.length === 0){
        return (
            <div className="contenedorLoader">
                <Loader
                    type="Oval"
                    color="#00BFFF"
                    height={400}
                    width={400}
                    timeout={3000} //3 secs
            />
            </div>
        )
    }
    return (
        <>
            <div className="contenedorGralCities" style={{backgroundImage: `url(/img/citiesbackground.jpg)`}}>
                <div className="contenedor-search" style={{backgroundImage: `url(/img/citiesBG.jpg)`}}>
                    <h1 id="title-Cities">Cities</h1>
                    <input autoComplete="off" autoFocus="on" id="input-text" placeholder="Search Here!" className="search-input"
                    onChange={e => props.getFilteredCities(e.target.value)}></input>                        
                </div>
                <div className="container-cities">
                    <Cities_ cities={props.FilterCities}/>
                </div>
                <div className="botonesNavegador">
                    <Button variant="primary" className="botoncito">
                        <NavLink style={{color:'white'}} to="/">
                            Go Home <i class="fas fa-home"></i>
                        </NavLink>
                    </Button>
                    <Button variant="primary" className="botoncito" onClick={movePointer}>
                        Go Top <i class="fas fa-arrow-up"></i>
                    </Button>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        allCities: state.CitiesRedux.cities,
        FilterCities: state.CitiesRedux.filteredCities
    }
}
const mapDispatchToProps = {
    LoadCities: citiesAction.loadCities,
    getFilteredCities: citiesAction.getFilteredCities
}
export default connect(mapStateToProps, mapDispatchToProps)(Cities)