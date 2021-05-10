import GoogleLogin from 'react-google-login'
import "react-toastify/dist/ReactToastify.css"
import { Button } from "react-bootstrap"
import { useState } from "react"
import { NavLink } from 'react-router-dom'
import userActions from '../redux/actions/userActions'
import { connect } from 'react-redux'

const LogIn = (props)=>{
    const [userLog , setUserLog] = useState({email: '' , password: ''})

    const handleForm = (e)=>{
        setUserLog({
            ...userLog,
            [e.target.name] : e.target.value
        })
        console.log("soy el usuario a loguear" , userLog)
    }
    //async (e) => {await axios etc etc} 
    const handleClick = (e = null , userGoogle = null)=>{
        e && e.preventDefault()
        //hacer pedido de tipo post con acciones
        let user = e ? userLog : userGoogle
        props.loguearUsuario(user)
    }
    const responseGoogle = (response) =>{
        if(response.profileObj.email){
            handleClick(null , {email: response.profileObj.email , password: response.profileObj.googleId})
        }
    }

    return(
        <div className="background-form">
            <div className="container-form">
                <h1>Welcome!</h1>
                <h2>You can Sign In here!</h2>
                <div className="form">
                    <label>Email:</label>
                    <input type="text" onChange={handleForm} name="email"/>
                    <label>Password:</label>
                    <input type="password" onChange={handleForm} name="password"/>
                    <Button variant="warning" onClick={handleClick} style={{marginBottom: '2vh'}}>Sign In!</Button>
                    <GoogleLogin
                        clientId="298916042325-csifhag04rdutr7pgbd7rpvs4674ipc6.apps.googleusercontent.com"
                        buttonText="Log In with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}/>
                </div>
                <div>
                    <h5>If you dont have an account, You can Sign Up <NavLink to="/sign-up">Here!</NavLink></h5>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    loguearUsuario: userActions.loguearUsuario
}
//no lee el state por eso null pero si despacha acciones
export default connect(null , mapDispatchToProps )(LogIn)