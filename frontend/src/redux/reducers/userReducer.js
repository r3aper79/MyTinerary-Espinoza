const initialState = {
  loggedUser: null,
}

const userReducer = (state = initialState, action) => {
  console.log("soy action payload", action.payload)
  switch (action.type) {
    case "USER_LOG":
      //si me llega algo en el payload
      if(action.payload){
       /*localStorage.setItem("firstName", action.payload.firstName);
        localStorage.setItem("userPicture", action.payload.userPicture);
        localStorage.setItem("token", action.payload.token);*/
        localStorage.setItem('userLogged', JSON.stringify({firstName: action.payload.firstName,
        userPicture: action.payload.userPicture}))
        localStorage.setItem('token', action.payload.token)
      }
      return {
        ...state,
        loggedUser: action.payload,
      };
    case "LOGOUT_USER":
      localStorage.clear();
      return {
        ...state,
        loggedUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
