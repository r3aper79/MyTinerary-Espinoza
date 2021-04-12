import {NavLink} from 'react-router-dom'
const logo = require('../img/login1.png')
const Header = ()=>{
    return(
        <>
        <header className="Header-container">
            <div className="Mynav">
                <NavLink to="/"><h4 className="h4-link">Home</h4></NavLink>
                <NavLink to="/cities"><h4 className="h4-link">Cities</h4></NavLink>
                <NavLink to="/sign-up"><h4 className="h4-link">Sign Up</h4></NavLink>
                <NavLink to="/log-in"><h4 className="h4-link">Log in</h4></NavLink> 
            </div>
            <div className="Login-img" style={{backgroundImage: `url(${logo.default})`}}></div>
        </header>
        </>
    )
}
export default Header