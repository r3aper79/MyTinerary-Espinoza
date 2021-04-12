import {NavLink} from 'react-router-dom'

const buttonHero = () =>{
    return(
        <>
        <h1 id="heroTitle" style={{color: 'white'}}>
            It's time to explore the world!!!</h1>
        <NavLink to="/cities">
        <button className="button-hero">
            Click here
        </button>
        </NavLink>
        </>
    )
}

export default buttonHero