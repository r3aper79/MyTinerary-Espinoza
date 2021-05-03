import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const userActions = {
    //crear usuario
    signUp: (newUser) => {
        return async (dispatch , getState) => {
            try{
                const response = await axios.post('http://localhost:3080/api/user/register' , newUser)
                console.log("estoy en userAction" , response)
                if(!response.data.success){return response.data}
                dispatch({
                    type: "USER_LOG",
                    payload: response.data
                })
                toast.success("Your account was created successfully!")
            }catch(error){
                console.log(error)
                toast.error("Sorry! Something went wrong!!")
            }
        }
    },
    //loguear usuario
    //user es el parametro que me despacha el componente SignIn al hacer click en enviar
    signIn: (user) => {
        return async (dispatch , getState) => {
            try{
                const response = await axios.post('http://localhost:3080/api/user/login' , user)
                if(!response.data.success){return response.data}
                dispatch({
                    type: "USER_LOG",
                    payload: response.data
                })
                toast.success("Welcome" + response.data.response.firstName)
            }catch(error){
                toast.error("Sorry! Something went wrong!!")
                console.log(error)
            }
        }
    },
    //desloguear usuario
    signOut: () => {
        return async (dispatch , getState) => {
            dispatch({
                type: "SIGN_OUT"
            })
        }
    },
    //conservar usuario
    loginFromLocalStorage: (token) => {
        console.log("hola soy token" , token)
        return async (dispatch , getState) => {
            try{
                const response = await axios.post('http://localhost:3080/api/user/localstorage' , {token} ,{
                    headers:{
                        Authorization: 'Bearer ' + token
                    }
                })
                dispatch({
                    type: "USER_LOG",
                    payload: {response: {...response.data.response}}
                })
            }catch(error){
                if(error.response.status === 401){
                    localStorage.clear()
                    return false
                }
            }
        }
    }
}

export default userActions