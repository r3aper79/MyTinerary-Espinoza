import {Navbar , Nav, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const logo = require('../img/login1.png')
const Header = ()=>{
    return(
        <>
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand style={{color: 'white'}}>MyTinerary</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/"><h4 className="h4-link">Home</h4></NavLink>
                    <NavLink to="/cities"><h4 className="h4-link">Cities</h4></NavLink>
                </Nav>
              
                    <NavDropdown style={{backgroundImage: `url(${logo.default})`}} id="basic-nav-dropdown">
                        <NavLink to="/sign-up"><h6 className="h3-dropmenu">Sign Up</h6></NavLink>
                        <NavLink to="/log-in"><h6 className="h3-dropmenu">Log in</h6></NavLink>
                    </NavDropdown>
                    <div className="Login-img" style={{backgroundImage: `url(${logo.default})`}}></div>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
export default Header