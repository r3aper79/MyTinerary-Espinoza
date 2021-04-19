const mongoose = require('mongoose')

//crear el esquema
//ejemplo {type: String , required: true o false}
//ejemplo2 {type: Boolean, default: false} default es el valor inicial
//el modelo es el que se encarga de pedirle a la base de datos los valores iguales al esquema enviado



const CitySchema = new mongoose.Schema({
    src: {type: String, required:true},
    titulo: {type: String , required: true},
})


//mongoose.model ('nombre de la coleccion en singular',schema)
const City = mongoose.model('city', CitySchema)



//lo exporto para poderlo usar en su controlador osea citiesController
module.exports = City