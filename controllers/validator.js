const Joi = require('joi')

const validator = {
    validarCuentaNueva: (req , res , next)=>{
        //el schema
        const schema = Joi.object({
            firstName: Joi.string().trim().required().min(2).max(20).pattern(new RegExp('[a-zA-Z]$')).message({
                "string.base": "Your name should by a text type",
                "string.empty": "Your first name is a required field",
                "any.required": "Your first name is a required field",
                "string.min": "Your first name must have at least 3 letters",
                "string.max": "Your first name must have maximum 20 letters"
            }),
            surname: Joi.string().trim().required().min(2),
            email: Joi.string().trim().required().email(),
            password: Joi.string().trim().required().min(6).alphanum(),
            userPicture: Joi.string().trim().required(),
            country: Joi.string().trim().required()
        })
        //la verificacion
        const validar = schema.validate(req.body , {abortEarly: true})
        //respuesta o el next
        if(validar.error){
            res.json({success: false , errorValidador: validar.error.details})
        }
        next()
    }
}

module.exports = validator