import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const userActions = {
  crearUsuario: (nuevoUsuario) => {
    return async (dispatch , getState) => {
      const respuesta = await axios.post('http://localhost:3080/api/user/register' , nuevoUsuario)
      //lo que me responde el validador
      console.log("hola soy respuesta definitiva" , respuesta)
      if(!respuesta.data.success){
        return respuesta.data
      }
      dispatch({
        type: 'USER_LOG',
        payload: respuesta.data.success ? respuesta.data.response : null
      })
      toast.success("Your account was created succesfully!")
    }
  },
  loguearUsuario : (usuarioALoguear) => {
    return async (dispatch , getState) =>{
      const respuesta = await axios.post('http://localhost:3080/api/user/login' , usuarioALoguear)
      if(!respuesta.data.success){
        toast.error(respuesta.data.error)
      } else{
        let greeting = 'Welcome back ' + respuesta.data.response.firstName
        toast(greeting)
      }
      dispatch({
        type: 'USER_LOG',
        payload: respuesta.data.success ? respuesta.data.response : null
      })
    }
  },
   desloguearUsuario : () => {
     toast.success("Bye! Have a nice day! :)")
     return (dispatch , getState) => {
       dispatch({
         type: 'LOGOUT_USER'
       })
     }
  },
  loguearUsuarioLS: (usuarioLS) => {
    console.log("soy usuarioLS" , usuarioLS)
    return async (dispatch, getState) => {
      try {
          const respuesta = await axios.get('http://localhost:3080/api/user/localstorage', {
          headers: {
            'Authorization': 'Bearer '+ usuarioLS
          }
      })
      console.log("usuarioLS",respuesta)
      //.data.response es lo que me mando el controller al yo haberle hecho un pedido de tipo GET
        dispatch({type: 'USER_LOG', payload: {
            ...respuesta.data.response,
            token: usuarioLS
        }})
      }catch(err) {
        if(err.response.status === 401){
          alert("No toques el token")
          localStorage.clear()
        }
      }    
  }
  }
}

export default userActions;
