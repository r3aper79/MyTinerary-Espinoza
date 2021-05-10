//necesito importar el modelo
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userControler = {
  registrarUsuario: async (req, res) => {
    const {firstName,surname,email,password,userPicture,country,} = req.body;
    const UserExist = await User.findOne({ email })
    //findOne devuelve un objeto, find un array
    console.log("findOne" , UserExist)
    let token, error , newUser;
    //hasheo la contraseña del usuario
    //(clave a hashear , salt 'por defecto es 10')
    passwordWithHash = bcryptjs.hashSync(password,10)
    if(!UserExist){
      console.log("estoy en userController")
      try{
        newUser = new User({firstName , surname , email , password:passwordWithHash , userPicture , country})
        await newUser.save()
        token = jwt.sign({...newUser},process.env.SECRET_KEY)
      }catch(err){
        console.log(err)
        error = "Please verify registrarUsuario in userController"
      }
    }else{
      error = "This mail is already used"
    }
    res.json({
      success: !error ? true : false,
      response: {token: token , userPicture: newUser.userPicture , firstName: newUser.firstName},
      error: error
    })
  },
  loguearUsuario: async (req, res) => {
    try {
      const { email, password } = req.body;
      let LogInError, token;

      const UserExist = await User.findOne({ email });
      if(UserExist){
        const matchPassword = bcryptjs.compareSync(password , UserExist.password)
        if(matchPassword){
          token = jwt.sign({...UserExist} , process.env.SECRET_KEY)
        } else{
          LogInError = "mail or password wrong"
        }
      } else {
        LogInError = "mail or password wrong"
      }
      res.json({
        success: !LogInError ? true : false,
        response: !LogInError && {token , firstName: UserExist.firstName , userPicture: UserExist.userPicture},
        error: LogInError
      })
    } catch (error) {
      console.log(error);
    }
  },
  //req.user me llegan todos los datos del modelo user que pasaron por el passport
  //response va al userActions 
  loginFromLocalStorage: async (req, res) => {
    res.json({
      success: true,
      response: {
        firstName: req.user.firstName,
        userPicture: req.user.userPicture,
      },
    });
  },
};
module.exports = userControler;
