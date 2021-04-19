import Cities_ from '../components/Cities_'
import axios from 'axios'
import React, {useEffect, useState} from 'react'

const Cities = ()=>{

    let [allCities, setCities] = useState([])
    const [search , setSearch] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:3080/api/cities')
        .then(response => setCities(allCities = response.data.response))
        .catch(error => console.log(error))
        window.scrollTo(0,0)  
    },[])
    const filteredCities = allCities.filter( city =>{
        return city.titulo.toLowerCase().includes(search.trim().toLowerCase())
    })
    return (
        <>
            <div className="contenedorGralCities">
                <h1 id="title-Cities">Cities</h1>
                <input id="input-text" placeholder="Search Here!" onChange={ e => setSearch(e.target.value)} className="search-input"></input>
                <div className="container-cities">
                    <Cities_ cities= {filteredCities}/>
                </div>
            </div>
        </>
    )

}

export default Cities