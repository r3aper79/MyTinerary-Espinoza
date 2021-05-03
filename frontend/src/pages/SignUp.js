import { useState , useEffect } from "react"
import { connect } from "react-redux"
import userActions from '../redux/actions/userActions'
import {toast} from 'react-toastify'
import {Button} from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"


const SignUp = (props)=>{
   
   const [countries, setCountries] = useState([])
   const [showPassword , setShowPassword] = useState(true)
   const [errores, setErrores] = useState([])
   const [newUser,setNewUser] = useState({
       firstName: '',
       surname: '',
       email: '',
       password: '',
       userPicture: '',
       country: ''
   })

   useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all')
       .then(res => setCountries(res.data))
       window.scrollTo(0,0)
   },[])

   const handleForm = e =>{
       setNewUser({
           ...newUser,
           [e.target.name] : e.target.value
       })
       console.log(newUser)
   }

   const handleClick = async (e) =>{
       e.preventDefault()
       const respuesta = await props.crearUsuario(newUser)
       console.log("soy respuesta en signUp",respuesta)
       if(respuesta && !respuesta.success){
           toast.error("hubo un error no se cual")
           setErrores(respuesta.errores)
       }else{
           toast.success("Your account has been created successfully")
       }
   }

    return(
        <div className="background-form">
            <div className="container-form">
                <h1>Welcome</h1>
                <h2>Sign Up</h2>
                <div className="form">
                    <label>First Name:</label>
                    <input className="input-pass" type="text" name="firstName" placeholder="Please, Enter your first name" onChange={handleForm}/>
                    <label>Surname:</label>
                    <input className="input-pass" type="text" name="surname" placeholder="Please, Enter your surname" onChange={handleForm}/>
                    <label>Email:</label>
                    <input className="input-pass" type="email" name="email" placeholder="Please, Enter your email adress" onChange={handleForm}/>
                    <label>Password:</label>
                    <div className="password-container">
                        <input className="input-pass" type={showPassword ? "password" : "text"} placeholder="Please, Enter a password" name="password" onChange={handleForm}/>
                            <button id="show_password" className="btn btn-primary" type="button" onClick={()=>setShowPassword(!showPassword)}><span className="fa fa-eye-slash icon"></span> </button>
                    </div>
                    <label>URL Picture:</label>
                    <input className="input-pass" type="text" name="userPicture" placeholder="Please insert an Image URL" onChange={handleForm}/>
                    <label>Country:</label>
                    <select className="input-pass" name="country" onChange={handleForm}>
                        <option>Choose your country:</option>
                        {countries.map(country => <option value={country.name} key={country.name}>{country.name}</option>)}
                    </select>
                </div>
                <Button variant="warning" onClick={handleClick}>Sign Up!</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        loggedUser: state.UserRedux.loggedUser
    }
}
const mapDispatchToProps = {
    crearUsuario: userActions.signUp
}
export default connect(mapStateToProps , mapDispatchToProps)(SignUp)