const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')


module.exports = passport.use(new jwtStrategy({ // creo la estrategia 
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(), // se busca el token en el header de la peticion
    secretOrKey: process.env.SECRET_KEY // este dato esta en la payload decodificado
}, (payload, done) =>{
    User.findById(payload._doc._id) // busca el usuario por la id que esta encriptado dentro del token (es asincrono)
    .then( user => {
        if(!user) {
            return done(null, false) //done es (error , user)
        } else {
            return done(null, user)
        }
    })
    .catch(error => {
        return done(error, false)
    }) 
}))