//necesito importar el modelo
const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControler = {

    registrarUsuario: async (req, res)=>{
        try{
            const {firstName , surname , email , password , userPicture , country} = req.body
            let errores = []
            const UserExist = await User.findOne({email})
            if(UserExist){
                errores.push("el usuario existe")
                console.log("el usuario existe")
            }
            if(errores.length === 0){
                const passwordWithHash = bcryptjs.hashSync(password , 10)
                let newUser = new User({
                    firstName,
                    surname,
                    email,
                    password: passwordWithHash,
                    userPicture,
                    country
                })
                var newUserSaved = await newUser.save()
                var token = jwt.sign({...newUserSaved},process.env.SECRET_KEY,{})
            }
            return res.json({success: errores.length === 0 ? true : false, errores: errores, response: errores.length === 0 && {token, firstName: newUserSaved.firstName}})
        }catch(err){
            console.log(err)
        }
    },

    loguearUsuario : async (req , res) => {
        try{
            const {email , password} = req.body
            const UserExist = await User.findOne({email})
            const LogInError = "The mail or password is incorrect, Please try again!"
            if(!UserExist){return res.json({success: false , response: LogInError})}
            
            const passwordMatch = bcryptjs.compareSync(password , UserExist.password)
            if(!passwordMatch){return res.json({success: false , response: LogInError})}

            var token = jwt.sign({...UserExist} , process.env.SECRET_KEY , {})
            return res.json({success: true , response: {token , firstName: UserExist.firstName , userPicture: UserExist.userPicture}})
        }catch(error){
            console.log(error)
        }
    },
    loginFromLocalStorage: async (req , res) => {
        res.json({success: true , response: {token: req.body.token , firstName: req.user.firstName , userPicture: req.user.userPicture}})
    }
}
module.exports = userControler