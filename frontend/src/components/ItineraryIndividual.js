import {Button,Card,Accordion} from 'react-bootstrap'
import {useState} from 'react'
const ItineraryIndividual = ({item,bgrImg})=>{
    let [visible,setVisible] = useState(false) 
    const handleVisible = () => {
        setVisible(!visible)
    }
    return(
        <div className="itineraryCard">
            <div className="tituloItinerario">{item.titulo}</div>
            <div className="profilePhoto" style={{backgroundImage: `url(${bgrImg.default})`}}></div>
            <h1 style={{color: 'white'}}>{item.nombreUser}</h1>
            <div className="objetos">
                <h4>Price: {new Array(item.precio).fill(<i className="far fa-money-bill-alt"> </i>)}</h4>
                <h4>Duration: {new Array(item.duracion).fill(<i className="fas fa-stopwatch"> </i>)}</h4>
                <h4><i class="far fa-heart">{item.likes}</i></h4>
            </div>
            <div className="hashtag">
                {item.hashtag.map(i=>{return(<h2>{i}</h2>)})}
            </div>
            <Accordion>
                <Accordion.Toggle onClick={handleVisible} as={Button} variant="link" eventKey="0">
                    <Button>{visible ? "View More" : "View Less"}</Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <h1>Under Construction</h1>
                </Accordion.Collapse>
                
            </Accordion>
    </div>
    )
}
export default ItineraryIndividual