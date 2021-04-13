import {Row , Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const Footer = ()=>{
    return(
        <footer>
            <Row style={{alignItems:'center' , justifyItems:'center'}}>
                <Col md={2} sm={2}>
                <NavLink to="/"><h2 className="h4-link iframe">Home</h2></NavLink>
                </Col>
                <Col md={2} sm={2}>
                <NavLink to="/cities"><h2 className="h4-link iframe">Cities</h2></NavLink>
                </Col>
                <Col md={4} sm={4}>
                <h3 className="iframe" style={{margin:'1.2vh 2vw'}}>Contact Us: +1 646 980 4741</h3>
                </Col>
                <Col md={4} sm={12}>
                    <div className="iframe">
                    <iframe  key='iframe' title='frame' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11208.598095931597!2d-75.6155382!3d45.3861545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44cf6289fa3df1b0!2sThe%20Building%20Consultant%20%26%20Technological%20Service%20Co-Opertaive%20Society%20Ltd%20.%20T.1054!5e0!3m2!1ses!2sar!4v1618119877736!5m2!1ses!2sar"
            style={{height: '20vh',
            margin: '3vh 1vw'
            }}></iframe>
                    </div>
                </Col>
            </Row>
            
           
            

        </footer>
    )
}

export default Footer