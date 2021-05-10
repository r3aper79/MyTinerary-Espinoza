import { useState, useEffect } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import { toast } from "react-toastify"
import { Button } from "react-bootstrap"
import "react-toastify/dist/ReactToastify.css"
import GoogleLogin from 'react-google-login'
import axios from "axios"

const SignUp = (props) => {
  const [countries, setCountries] = useState([]);
  const [showPassword, setShowPassword] = useState(true);
  //const [errores, setErrores] = useState('');
  const [newUser, setNewUser] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    userPicture: "",
    country: "",
  });

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data));
    window.scrollTo(0, 0);
  }, []);

  const handleForm = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    })
  };

  const handleClick = async (e = null , googleUser = null) => {
    e && e.preventDefault();
    let usuario = e ? newUser : googleUser
    const result = await props.crearUsuario(usuario)
    //console.log("soy result en SignUp" , result.errorValidador[0].message)
    if(result && !result.success){
      //setErrores(result.errorValidador[0].message)
      toast.error(result.errorValidador[0].message)
    }
  };
  const responseGoogle = (response) =>{
    //response es el parametro que me envia google y dentro en profileObj me llega todos los datos del usuario
    //email , familyName, givenName, googleId , imageUrl, name (name es nombre y apellido juntos)
    //el token de google no es necesario
    //googleId va a ser la contraseña
    const {givenName ,familyName, email , googleId, imageUrl} = response.profileObj
    handleClick(null,{
      firstName: givenName,
      surname: familyName,
      email: email,
      password: googleId,
      userPicture: imageUrl,
      country: "No-Country",
    })
  }

  return (
    <div className="background-form">
      <div className="container-form">
        <h1>Welcome</h1>
        <h2>Sign Up</h2>
        <div className="form">
          <label>First Name:</label>
          <input
            className="input-pass"
            type="text"
            name="firstName"
            placeholder="Please, Enter your first name"
            onChange={handleForm}
          />
          <label>Surname:</label>
          <input
            className="input-pass"
            type="text"
            name="surname"
            placeholder="Please, Enter your surname"
            onChange={handleForm}
          />
          <label>Email:</label>
          <input
            className="input-pass"
            type="email"
            name="email"
            placeholder="Please, Enter your email adress"
            onChange={handleForm}
          />
          <label>Password:</label>
          <div className="password-container">
            <input
              className="input-pass"
              type={showPassword ? "password" : "text"}
              placeholder="Please, Enter a password"
              name="password"
              onChange={handleForm}
            />
            <button
              id="show_password"
              className="btn btn-primary"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span className="fa fa-eye-slash icon"></span>{" "}
            </button>
          </div>
          <label>URL Picture:</label>
          <input
            className="input-pass"
            type="text"
            name="userPicture"
            placeholder="Please insert an Image URL"
            onChange={handleForm}
          />
          <label>Country:</label>
          <select className="input-pass" name="country" onChange={handleForm}>
            <option>Choose your country:</option>
            {countries.map((country) => (
              <option value={country.name} key={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <Button variant="warning" onClick={handleClick} style={{marginBottom: ' 2vh'}}>
          Sign Up!
        </Button>
        <GoogleLogin
          clientId="298916042325-csifhag04rdutr7pgbd7rpvs4674ipc6.apps.googleusercontent.com"
          buttonText="Sign Up with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedUser: state.UserRedux.loggedUser,
  }
}
const mapDispatchToProps = {
  crearUsuario: userActions.crearUsuario,
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
