import {Button,Card,CustomToggle,Accordion} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import Loader from "react-loader-spinner"

const ItineraryCard = ({items})=>{
    let [visible,setVisible] = useState(false) 
    const handleVisible = () => {
        setVisible(!visible)
    }
    const movePointer =()=>{
        window.scrollTo(0,0)
    }

    return(
        <div className="contenedorDeItinerarios">
        {items.map(item => {
            const profilePhoto = require(`../img/${item.fotoUser}`)
            return(
                <div className="itineraryCard">
                    <div className="tituloItinerario">{item.titulo}</div>
                    <div className="profilePhoto" style={{backgroundImage: `url(${profilePhoto.default})`}}></div>
                    <h1 style={{color: 'white'}}>{item.nombreUser}</h1>
                    <div className="objetos">
                        <h4>Price: {new Array(item.precio).fill(0).map(elemento=><i class="far fa-money-bill-alt"></i>)}</h4>
                        <h4>Duration: {new Array(item.duracion).fill(0).map(elemento=><i class="fas fa-stopwatch"> </i>)}</h4>
                        <h4><i class="far fa-heart">{item.likes}</i></h4>
                    </div>
                    <div className="hashtag">
                        {item.hashtag.map(i=>{return(<h2>{i}</h2>)})}
                    </div>
                    <Button onClick={handleVisible} variant="warning">{visible ? "View More" : "View Less"}</Button>
                </div>
            )
        })}
            <div className="botonesNavegador">
                <Button variant="primary" className="botoncito">
                    <NavLink style={{color:'white'}} to="/">
                        Go Home <i class="fas fa-home"></i>
                    </NavLink>
                </Button>
                <Button variant="primary" className="botoncito" onClick={movePointer}>
                    <NavLink style={{color:'white'}} to="/cities">
                        Back to Cities <i class="fas fa-city"></i>
                    </NavLink>
                </Button>
            </div>
        </div>
    )
}
export default ItineraryCard