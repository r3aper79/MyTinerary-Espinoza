
import {Container, Row , Col, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const heroImg = require('../img/slice4.jpg')
const logo = require('../img/descarga.png')

const Hero = ()=>{
    return (
        <>
        <div style={{ backgroundImage: `url(${heroImg.default})`,marginBottom:'3vh'}}>
            <div style={{textAlign:'center'}} className="Hero-container">
                <Col md={6} sm={6}>
                    <div className="logo-hero" style={{backgroundImage: `url(${logo.default})`,marginTop:'6vh'}}>
                    </div>
                </Col>
                <Col md={10} sm={10}>
                    <h2 id="titleMytinerary">MyTinerary</h2>
                </Col>
                <Col xs={10} md={10} style={{margin:'1vh 0'}}>
                    <p id={"Find"}>Find your perfect trip, designed by insiders who know and love their cities</p>
                </Col>
                <Col className="hero-hover" xs={10} sm={10}>
                    <h1 id="heroTitle">It's time to explore the World!!!</h1>
                    <Button variant="warning" className="my-btn">
                        <NavLink  className="NavLink" to="/cities">Click Here!!</NavLink>
                    </Button>
                </Col>
        </div>
        </div>
        </>
    )
}

export default Hero