const mongoose = require('mongoose')


//creo el esquema y a partir del esquema creo el modelo
const ItinerariesSchema = new mongoose.Schema({
    titulo: {type: String , required: true},
    nombreUser:{type: String , required: true},
    fotoUser:{type: String , required: true},
    precio:{type: Number, required: true},
    duracion:{type: Number , required: true},
    likes:{type: Number , default: 0},
    hashtag: [String],
    comentarios: [String],
    actividades: {type: [{fotoActividad: String , tituloActividad: String}] , required: false},
    IdCity: {type: mongoose.Types.ObjectId, ref: "cities"}
})

//creando el modelo...
const Itinerary = mongoose.model('itinerary',ItinerariesSchema)
//exportando el modelo...
module.exports = Itinerary  