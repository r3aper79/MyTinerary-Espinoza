
import {Container, Row , Col, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const heroImg = require('../img/slice4.jpg')
const logo = require('../img/descarga.png')

const Hero = ()=>{
    return (
        <>
        <Container fluid style={{width:'100%', margin: '0' , padding: '0' , backgroundImage: `url(${heroImg.default})`, height:'100%',
            backgroundSize: 'cover'}}>
        <Row style={{textAlign:'center'}} className="Hero-container">
        <Col md={6} sm={6}>
            <div style={{backgroundImage: `url(${logo.default})`, backgroundSize: 'cover' , height: '48vh',
                width: '65%', backgroundPosition: '50% 50%', margin:'0 auto', padding:'0'
            }}>
            </div>
        </Col>
            <Col md={10} sm={10}>
            <h2 id={"titleMytinerary"} style={{fontSize:'45px', fontWeight: 'bold',color:'white'}}>MyTinerary</h2>
            </Col>
             <Col xs={10} md={10} style={{margin:'1vh 0'}}>
            <p id={"Find"} style={{fontSize: '25px' , color: 'white', margin:'0.41vh 0vw', 
            fontWeight: '600'}}>Find your perfect trip, designed by insiders who know and love their cities</p>
            </Col>
            <Col className="hero-hover" xs={10} sm={10} style={{margin:'0.6vh 0' , border:'double 5px lightblue', borderRadius:'70px'}}>
            <h1 id={"heroTitle"} style={{color: 'white', 
            fontWeight: '600'}}>It's time to explore the World!!!</h1>
                     <Button variant="warning" size="lg" style={{marginTop:'2vh' , marginBottom:'1vh'}}>
              <NavLink style={{textDecoration:'none',color: 'black'}} to="/cities">Click Here!!</NavLink>
              </Button>
            </Col>

        </Row>
        </Container>
        </>
    )
}

export default Hero