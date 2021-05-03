import {Button,Card,Accordion} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import ItineraryIndividual from '../components/ItineraryIndividual'


const ItineraryCard = ({items})=>{
   
    const movePointer =()=>{
        window.scrollTo(0,0)
    }

    return(
        <div className="contenedorDeItinerarios">
        {items.map(item => {
            const profilePhoto = require(`../img/${item.fotoUser}`)
            return(
                <ItineraryIndividual item={item} bgrImg={profilePhoto} />
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