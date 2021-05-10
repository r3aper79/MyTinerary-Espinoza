import {Navbar , Nav, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
const logo = require('../img/login1.png')
const Header = (props)=>{
    
    const photoUser = props.loggedUser ? props.loggedUser.userPicture : '/img/login1.png'
    const welcomeName = props.loggedUser ? ("Welcome " + props.loggedUser.firstName) : "MyTinerary"
    
    return(
        <>
        <Navbar bg="dark" expand="md">
            <Navbar.Brand style={{color: 'white'}}>{welcomeName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/"><h4 className="h4-link">Home</h4></NavLink>
                    <NavLink to="/cities"><h4 className="h4-link">Cities</h4></NavLink>
                </Nav>
              
                    <NavDropdown id="basic-nav-dropdown">
                        {!props.loggedUser && (
                            <>
                                <NavLink to="/sign-up"><h6 className="h3-dropmenu">Sign Up</h6></NavLink>
                                <NavLink to="/log-in"><h6 className="h3-dropmenu">Log in</h6></NavLink>  
                            </>
                        )}
                        {props.loggedUser &&(<NavLink to="/" onClick={props.desloguearUsuario}><h6 className="h3-dropmenu">Log Out</h6></NavLink>)} 
                    </NavDropdown>
                    <div className="Login-img" style={{
                        backgroundImage: `url(${photoUser})`,
                    }}></div>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
const mapStateToProps = state =>{
    return{
        loggedUser: state.UserRedux.loggedUser
    }
}
const mapDispatchToProps = {
    desloguearUsuario: userActions.desloguearUsuario
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)