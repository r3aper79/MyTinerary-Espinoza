const mongoose = require('mongoose')


//creo el esquema y a partir del esquema creo el modelo
const ItinerariesSchema = new mongoose.Schema({
    titulo: {type: String , required: true},
    nombreUser:{type: String , required: true},
    fotoUser:{type: String , required: true},
    precio:{type: Number, required: true},
    duracion:{type: Number , required: true},
    likes: {type: Array, required: true, default:[]},
    hashtag: [String],
    comentarios: {type:[{nombreUser: String, fotoUser: String , comment: String}] , required: false , default: []},
    IdCity: {type: mongoose.Types.ObjectId, ref: "city"}
})

//creando el modelo...
const Itinerary = mongoose.model('itinerary',ItinerariesSchema)
//exportando el modelo...
module.exports = Itinerary


//actividades: {type: [{fotoActividad: String , tituloActividad: String}] , required: false}, modelo aparte