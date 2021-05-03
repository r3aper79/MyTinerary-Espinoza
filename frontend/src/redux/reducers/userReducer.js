const initialState = {
    loggedUser : null
}

const userReducer = (state = initialState , action) =>{
    switch (action.type) {
        case "USER_LOG":
            localStorage.setItem('firstName', action.payload.response.firstName)
            localStorage.setItem('userPicture', action.payload.response.userPicture)
            localStorage.setItem('token', action.payload.response.token)
            return{
                ...state,
                loggedUser: action.payload
            }
        case "SIGN_OUT":
            localStorage.clear()
            return{
                ...state,
                loggedUser: null
            }
        default:
            return state
    }
}

export default userReducer