import {NavLink} from 'react-router-dom'
const Footer = ()=>{
    return(
        <footer>
            <NavLink to="/"><h2 className="h4-link">Home</h2></NavLink>
            <NavLink to="/cities"><h2 className="h4-link">Cities</h2></NavLink>
            <h3>Contact Us: +1 646 980 4741</h3>
            <iframe key='iframe' title='frame' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11208.598095931597!2d-75.6155382!3d45.3861545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44cf6289fa3df1b0!2sThe%20Building%20Consultant%20%26%20Technological%20Service%20Co-Opertaive%20Society%20Ltd%20.%20T.1054!5e0!3m2!1ses!2sar!4v1618119877736!5m2!1ses!2sar"
            style={{height: '20vh',
            margin: '4vh 2vw'
            }}></iframe>
        </footer>
    )
}

export default Footer