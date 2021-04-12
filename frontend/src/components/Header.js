import {NavLink} from 'react-router-dom'
import {Navbar , Nav, DropdownButton,Form} from 'react-bootstrap'
const logo = require('../img/login1.png')
const Header = ()=>{
    return(
        <>
        <Navbar md={11} sm={11} bg="dark" expand="lg" className="Header-container" sticky="top" variant="dark" style={{height:'14.1vh'}}>
         <Navbar.Brand style={{color: 'white', fontWeight: 'bold', fontSize: '4vh'}}>MyTinerary</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
        <NavLink to="/"><h4 className="h4-link">Home</h4></NavLink>
         <NavLink to="/cities"><h4 className="h4-link">Cities</h4></NavLink>
             <DropdownButton variant="warning" id="dropdown-basic-button" title="User Options" style={{paddingTop:'0.2vh' , paddingLeft:'0.5vw'}}>
                <NavLink to="/sign-up"><h4 className="h3-dropmenu">Sign Up</h4></NavLink>
                <NavLink to="/log-in"><h4 className="h3-dropmenu">Log in</h4></NavLink>
            </DropdownButton>
        </Nav>
    <Form inline>
        <div className="Login-img" style={{backgroundImage: `url(${logo.default})`}}></div>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}
export default Header