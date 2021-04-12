import {Row , Col} from 'react-bootstrap'
const Title = ()=>{
    return(
        <>
        <Row style={{marginTop:'1vh',padding:'0'}}>
            <Col>
            <h2 style={{color: 'white',backgroundColor: '#514646',
                paddingTop: '1vh',
                margin: '2vh 0',
                textAlign: 'center'
            }}>Popular MyTineraries</h2>
            </Col>
        </Row>
        </>
    )
}

export default Title